const CHUNK_SIZE = 1024 * 1024 * 1; // 分片大小1MB
let THREAD_COUNT = navigator.hardwareConcurrency || 4; // 核心数（线程数）

/**
 * @description: 切割文件
 * @return result 文件分片后的数组
 * @param file 源文件
 */
export const cutFile = async (file) => {
	console.log('file', file);
	return new Promise((resolve) => {
		const chunkCount = Math.ceil(file.size / CHUNK_SIZE); // 文件分片的总数量
		// 文件小于50MB时直接用两个线程
		if (file.size < 50 * 1024 * 1024) {
			THREAD_COUNT = 2;
		}
		const threadChunkCount = Math.ceil(chunkCount / THREAD_COUNT); // 每个线程被分配的分片数量
		const result = [];
		let finishCount = 0; // 完成的线程数
		// 循环创建线程处理分片任务
		for (let i = 0; i < threadChunkCount; i++) {
			const worker = new Worker(new URL('./worker.js', import.meta.url), {
				type: 'module',
			});
			const start = i * threadChunkCount; // 每一个线程中--分片 起始位置 索引值
			let end = (i + 1) * threadChunkCount; // 每一个线程--分片 结束位置 索引值(不包括)
			// 最后一个线程中被实际分配的分片数 可能小于 threadChunkCount
			if (end > chunkCount) {
				end = chunkCount;
			}
			// 发送消息给线程
			worker.postMessage({
				file,
				CHUNK_SIZE,
				startChunkIndex: start,
				enChunkIndex: end,
			});
			// 接收线程消息
			worker.onmessage = (e) => {
				console.log('e', e);
				for (let j = start; j < end; j++) {
					// 基于分片的索引值，将线程中的
					result[j] = e.data[j - start];
				}
				worker.terminate(); // 线程结束
				finishCount++;
				if (finishCount === THREAD_COUNT) {
					console.log('finish', result);
					resolve(result); // 分片完成
				}
			};
		}
	});
};
