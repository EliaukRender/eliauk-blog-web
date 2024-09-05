import React, { memo } from 'react';
import { UploadBigFileStyles } from '@/views/demoCollection/demo/UploadBigFile/styles';
import { cutFile } from '@/views/demoCollection/demo/UploadBigFile/utils';

/**
 * @description: 上传大文件
 */
const UploadBigFile = () => {
	// 选择文件
	const handleOnChange = async (e) => {
		console.log('change', e.target.files[0]);
		await cutFile(e.target.files[0]);
	};

	return (
		<UploadBigFileStyles>
			<input type='file' onChange={handleOnChange} />
		</UploadBigFileStyles>
	);
};

export default memo(UploadBigFile);
