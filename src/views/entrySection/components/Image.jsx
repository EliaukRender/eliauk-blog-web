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
			{videoDialogVisible && (
				<VideoDialog
					videoDialogVisible={videoDialogVisible}
					handleCloseVideo={handleCloseVideo}
					url='http://localhost:53000/飞驰人生-片尾曲.mp4'
					poster='http://localhost:53000/飞驰人生-封面.png'></VideoDialog>
			)}
		</ImageStyles>
	);
};

export default memo(Image);
