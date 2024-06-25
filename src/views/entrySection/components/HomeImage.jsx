import React, { memo, useState } from 'react';
import MoveAnimation from '@/components/Animation/moveAnimation';
import { motion } from 'framer-motion';
import { HomeImageWrapper } from '@/views/entrySection/css/HomeImageWrapper';

/**
 * @description: 主页头像
 */
const HomeImage = () => {
	const [showElse, setShowElse] = useState(false);

	return (
		<HomeImageWrapper>
			<MoveAnimation>
				{showElse && (
					<motion.div
						className='img-box'
						whileHover={{ scale: 1.1 }}
						onClick={() => {
							setShowElse(!showElse);
						}}>
						<img className='person-pic' src={require('@/assets/image/personal-pic.jpg')} alt='' />
					</motion.div>
				)}
				{!showElse && (
					<motion.div
						animate={{ scale: 1.15, transition: { duration: 2, repeat: 99999, repeatType: 'reverse', ease: 'linear' } }}
						className='duola-box'
						onClick={() => {
							setShowElse(!showElse);
						}}>
						<img className='duola' src={require('@/assets/image/duola-big.png')} alt='' />
					</motion.div>
				)}
			</MoveAnimation>
		</HomeImageWrapper>
	);
};

export default memo(HomeImage);
