import React, { memo } from 'react';
import { handleScrollTo } from '@/utils/handleScrollPage';
import { DownOutlined } from '@ant-design/icons';
import { NextPageBtnWrapper } from '@/views/home/components/nextPageBtn/styles';
import { shallowEqual, useSelector } from 'react-redux';

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
				<DownOutlined />
			</div>
		</NextPageBtnWrapper>
	);
};

export default memo(NextPageBtn);
