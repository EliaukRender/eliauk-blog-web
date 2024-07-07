import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ImageStyles } from '@/views/entrySection/css/ImageStyles';
import VideoDialog from '@/components/VideoDialog';

/**
 * @description: 主页头像
 */
const Image = () => {
	const [videoDialogVisible, setVideoDialogVisible] = useState(false);

	const openVideo = () => {
		setVideoDialogVisible(true);
	};

	const handleCloseVideo = () => {
		setVideoDialogVisible(false);
	};

	return (
		<ImageStyles>
			<motion.div
				initial={{ y: 25 }}
				animate={{
					y: 0,
					scale: 1.2,
					transition: {
						y: { duration: 1 },
						scale: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' },
					},
				}}
				className='duola-box'>
				<img className='duola' src={require('@/assets/image/fullImgs/duola-big.png')} alt='' onClick={openVideo} />
			</motion.div>
			{/* 播放视频 */}
			{/* 生产地址：  http://47.113.177.51/video/video-1.mp4   */}
			{/* 本地地址：  http://localhost:50000/video/video-1.mp4   */}
			{videoDialogVisible && (
				<VideoDialog
					videoDialogVisible={videoDialogVisible}
					handleCloseVideo={handleCloseVideo}
					url='http://47.113.177.51/video/video-1.mp4'></VideoDialog>
			)}
		</ImageStyles>
	);
};

export default memo(Image);
