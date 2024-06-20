import React, { memo, useEffect, useState } from 'react';
import { handleScrollTo } from '@/utils/handleScrollPage';
import { DownOutlined } from '@ant-design/icons';
import { NextPageBtnWrapper } from '@/views/home/components/nextPageBtn/styles';
import { useSelector } from 'react-redux';

/**
 * @description: 下一页按钮
 */
const NextPageBtn = () => {
	const [opacity, setOpacity] = useState(1);
	let isScrolling;
	const { currentSectionId } = useSelector((state) => ({
		currentSectionId: state.global.currentSectionId
	}));

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setOpacity(0);
			window.clearTimeout(isScrolling); // 清除之前的延迟器
			// 设置一个新的延迟器来判断滚动是否停止
			isScrolling = setTimeout(function () {
				// 执行滚动停止时的操作
				setOpacity(1);
			}, 1000);
		});
	});

	// 点击下一页
	const clickNext = () => {
		handleScrollTo(window.innerHeight * (currentSectionId + 1));
	};

	return (
		<NextPageBtnWrapper opacity={opacity}>
			<div
				className='next-page'
				onClick={() => {
					clickNext();
				}}>
				<DownOutlined />
			</div>
		</NextPageBtnWrapper>
	);
};

export default memo(NextPageBtn);
