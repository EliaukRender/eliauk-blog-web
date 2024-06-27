import React, { memo } from 'react';
import { handleScrollTo } from '@/utils/handleScrollPage';
import { ArrowDownOutlined } from '@ant-design/icons';
import { NextPageBtnStyles } from '@/views/entrySection/css/NextPageBtnStyles.js';
import { motion } from 'framer-motion';

/**
 * @description: 下一页按钮
 */
const NextPageBtn = () => {
	// 点击下一页--跳到第2个板块
	const clickNext = () => {
		handleScrollTo(window.innerHeight);
	};

	return (
		<NextPageBtnStyles>
			<div
				className='next-page'
				onClick={() => {
					clickNext();
				}}>
				<motion.div animate={{ translateY: 8 }} transition={{ delay: 2, duration: 0.7, repeat: 999, repeatType: 'mirror' }}>
					<ArrowDownOutlined />
				</motion.div>
			</div>
		</NextPageBtnStyles>
	);
};

export default memo(NextPageBtn);
