import SparkMD5 from 'spark-md5';

/**
 * @description: 生成文件分片
 * @param file 源文件
 * @param index 每个分片的索引值（第几个分片）
 * @param chunkSize 设定的每个分片的大小
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
				start, // 分片数据的起始位置
				end: chunkSize > blob.size ? start + blob.size : end, // 分片数据的结束位置
				index, // 第几个分片
				hash: spark.end(), // hash值
				blob, // 分片数据
			});
		};
		fileReader.readAsArrayBuffer(blob);
	});
};
