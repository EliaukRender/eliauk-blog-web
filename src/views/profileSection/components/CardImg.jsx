import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { CardImgStyles } from '@/views/profileSection/styles/CardImgStyles';

/**
 * @description: 图片
 */
const hiddenMask = 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)';
const visibleMask = 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)';

const CardImg = ({ id }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);

	return (
		<CardImgStyles
			initial={false}
			animate={
				isLoaded && isInView ? { WebkitMaskImage: visibleMask, maskImage: visibleMask } : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
			}
			transition={{ duration: 1, delay: 0.5 + 0.3 * id }}
			viewport={{ once: true }}
			onViewportEnter={() => setIsInView(true)}>
			{id && <motion.img src={require(`@/assets/image/personal/card-${id}.png`)} alt='' onLoad={() => setIsLoaded(true)} />}
		</CardImgStyles>
	);
};

CardImg.propTypes = {
	id: PropTypes.number
};

export default memo(CardImg);
