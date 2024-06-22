import React, { memo } from 'react';
import { handleScrollTo } from '@/utils/handleScrollPage';
import { ArrowDownOutlined } from '@ant-design/icons';
import { NextPageBtnWrapper } from '@/views/home/css/NextPageBtnStyles.js';
import { shallowEqual, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

/**
 * @description: 下一页按钮
 */
const NextPageBtn = () => {
	const { currentSectionId } = useSelector(
		(state) => ({
			currentSectionId: state.global.currentSectionId
		}),
		shallowEqual
	);

	// 点击下一页
	const clickNext = () => {
		handleScrollTo(window.innerHeight * (currentSectionId + 1));
	};

	return (
		<NextPageBtnWrapper>
			<div
				className='next-page'
				onClick={() => {
					clickNext();
				}}>
				<motion.div animate={{ translateY: 8 }} transition={{ delay: 2, duration: 1, repeat: 999, repeatType: 'mirror' }}>
					<ArrowDownOutlined />
				</motion.div>
			</div>
		</NextPageBtnWrapper>
	);
};

export default memo(NextPageBtn);
