import SparkMD5 from 'spark-md5';
import './worker';

const CHUNK_SIZE = 1024 * 1024 * 1; // 分片大小1MB
const THREAD_COUNT = navigator.hardwareConcurrency || 4; // 核心数（线程数）
/**
 * @description: 切割文件
 * @return result 文件分片后的数组
 * @param file 源文件
 */
export const cutFile = async (file) => {
	return new Promise((resolve) => {
		const chunkCount = Math.ceil(file.size / CHUNK_SIZE); // 分片的总数量
		const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT); // 每个线程分配的分片数量
		const result = [];
		let finishCount = 0; // 完成的线程数
		for (let i = 0; i < threadChunkCount; i++) {
			// 	创建线程完成分片任务
			const worker = new Worker('./worker.js', {
				type: 'module',
			});
			const start = i * threadChunkCount; // 每一个线程中 分片起始位置索引值
			let end = (i + 1) * threadChunkCount; // 每一个线程中 分片结束位置索引值
			if (end > chunkCount) {
				end = chunkCount;
			}
			// 给线程内部发送消息
			worker.postMessage({
				file,
				CHUNK_SIZE,
				startChunkIndex: start,
				enChunkIndex: end,
			});
			// 接收线程消息
			worker.onmessage = (e) => {
				for (let j = start; j < end; j++) {
					result[j] = e.data[i - start];
				}
				worker.terminate(); // 线程结束
				finishCount++;
				if (finishCount === THREAD_COUNT) {
					resolve(result); // 分片完成
				}
			};
		}
	});
};

/**
 * @description: 生成文件分片
 * @param file 源文件
 * @param index 每个分片的索引值
 * @param chunkSize 每个分片的大小
 */
export const createChunk = (file, index, chunkSize) => {
	return new Promise((resolve, reject) => {
		const start = index * chunkSize;
		const end = start + chunkSize;
		const spark = new SparkMD5.ArrayBuffer();
		const fileReader = new FileReader();
		const blob = file.slice(start, end);
		fileReader.onload = (e) => {
			spark.append(e.target.result);
			resolve({
				start,
				end,
				index,
				hash: spark.end(),
				blob,
			});
		};
		fileReader.readAsArrayBuffer(blob);
	});
};
