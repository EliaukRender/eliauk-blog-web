import React, { memo } from 'react';
import { BottomControllerStyles } from '@/views/musicSection/styles/BottomControllerStyles';
import ControllerBtns from '@/views/musicSection/components/BottomArea/ControllerBtns';
import TimeLine from '@/views/musicSection/components/BottomArea/TimeLine';

/**
 * @description: 底部播放控制区域
 */
const BottomController = () => {
	return (
		<BottomControllerStyles>
			{/* 播放按钮操作区域 */}
			<ControllerBtns></ControllerBtns>
			{/* 播放时间线 */}
			<TimeLine></TimeLine>
		</BottomControllerStyles>
	);
};

export default memo(BottomController);
