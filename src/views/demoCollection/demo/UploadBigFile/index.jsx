import React, { memo } from 'react';
import { UploadBigFileStyles } from '@/views/demoCollection/demo/UploadBigFile/styles';
import { cutFile } from '@/views/demoCollection/demo/UploadBigFile/utils';

/**
 * @description: 上传大文件
 */
const UploadBigFile = () => {
	const handleOnChange = async (e) => {
		const chunksFile = await cutFile(e.target.files[0]);
		console.log('分片结束', chunksFile);
	};

	return (
		<UploadBigFileStyles>
			<input type='file' onChange={handleOnChange} />
		</UploadBigFileStyles>
	);
};

export default memo(UploadBigFile);
