import { createChunk } from '@/views/demoCollection/demo/UploadBigFile/utils/index';

/**
 * @description: 处理分片的线程
 */
onmessage = async (e) => {
	const { file, CHUNK_SIZE, startChunkIndex, enChunkIndex } = e.data;
	console.log(file, CHUNK_SIZE, startChunkIndex, enChunkIndex);
	const promises = [];
	for (let i = startChunkIndex; i < enChunkIndex; i++) {
		promises.push(createChunk(file, i, CHUNK_SIZE));
	}
	const chunks = await Promise.all(promises);
	postMessage(chunks);
};
