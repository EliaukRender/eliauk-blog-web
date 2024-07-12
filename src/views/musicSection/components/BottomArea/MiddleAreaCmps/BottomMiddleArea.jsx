import React, { memo } from 'react';
import { BottomMiddleAreaStyles } from '@/views/musicSection/styles/BottomMiddleAreaStyles';
import ControllerBtns from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/ControllerBtns';
import TimeLine from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/TimeLine';

/**
 * @description: 底部播放控制区域
 */
const BottomMiddleArea = () => {
	return (
		<BottomMiddleAreaStyles>
			{/* 播放按钮操作区域 */}
			<ControllerBtns></ControllerBtns>
			{/* 播放时间线 */}
			<TimeLine></TimeLine>
		</BottomMiddleAreaStyles>
	);
};

export default memo(BottomMiddleArea);
