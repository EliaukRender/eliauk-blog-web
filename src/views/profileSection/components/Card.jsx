import React, { memo } from 'react';
import { CardStyles } from '@/views/profileSection/styles/CardStyles';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import CardImg from '@/views/profileSection/components/CardImg';

/**
 * @description: 卡片
 */

const Card = ({ cardInfo, handleSelectCardId }) => {
	return (
		<CardStyles
			className={'card'}
			whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
			onClick={() => {
				handleSelectCardId(cardInfo.id);
			}}>
			<motion.div className='card-content'>
				<CardImg id={cardInfo.id}></CardImg>
			</motion.div>
		</CardStyles>
	);
};

Card.propTypes = {
	cardInfo: PropTypes.object,
	handleSelectCardId: PropTypes.func
};

export default memo(Card);
