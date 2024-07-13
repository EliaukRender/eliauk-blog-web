import React, { memo } from 'react';
import { BottomMiddleAreaStyles } from '@/views/musicSection/styles/BottomMiddleAreaStyles';
import ControllerBtns from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/ControllerBtns';
import TimeLine from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/TimeLine';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 底部播放控制区域
 */
const BottomMiddleArea = () => {
	const { showFullScreenLyric } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
		}),
		shallowEqual,
	);

	return (
		<BottomMiddleAreaStyles
			style={showFullScreenLyric ? { background: 'linear-gradient(to right, #404647 0%, #404647 50%, #343838 100%', borderTop: 'none' } : {}}>
			{/* 播放按钮操作区域 */}
			<ControllerBtns></ControllerBtns>
			{/* 播放时间线 */}
			<TimeLine></TimeLine>
		</BottomMiddleAreaStyles>
	);
};

export default memo(BottomMiddleArea);
