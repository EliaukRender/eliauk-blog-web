import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ImageStyles } from '@/views/entrySection/css/ImageStyles';

/**
 * @description: 主页头像
 */
const Image = () => {
	return (
		<ImageStyles>
			<motion.div
				initial={{ y: 25 }}
				animate={{
					y: 0,
					scale: 1.2,
					transition: {
						y: { duration: 1 },
						scale: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }
					}
				}}
				className='duola-box'>
				<img className='duola' src={require('@/assets/image/fullImgs/duola-big.png')} alt='' />
			</motion.div>
		</ImageStyles>
	);
};

export default memo(Image);
