import React, { memo } from 'react';
import MoveAnimation from '@/components/Animation/moveAnimation';
import { motion } from 'framer-motion';
import { HomeImageWrapper } from '@/views/entrySection/css/HomeImageWrapper';

/**
 * @description: 主页头像
 */
const HomeImage = () => {
	return (
		<HomeImageWrapper>
			<MoveAnimation>
				<motion.div className='img-box' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ ease: 'linear' }}>
					<img className='person-pic' src={require('@/assets/image/personal-pic.jpg')} alt='' />
				</motion.div>
			</MoveAnimation>
		</HomeImageWrapper>
	);
};

export default memo(HomeImage);
