import React, { memo } from 'react';
import { PlayerBottomStyles } from '@/views/eliaukMusic/styles/PlayerBottomStyles';
import BottomLeftArea from '@/views/eliaukMusic/components/BottomArea/LeftAreaCmps/BottomLeftArea';
import BottomController from '@/views/eliaukMusic/components/BottomArea/MiddleAreaCmps/BottomMiddleArea';
import BottomRightArea from '@/views/eliaukMusic/components/BottomArea/RightArea/BottomRightArea';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 播放器底部区域
 */
const PlayerBottom = () => {
	const { showFullScreenLyric } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
		}),
		shallowEqual,
	);

	return (
		<PlayerBottomStyles style={showFullScreenLyric ? { borderTop: 'none' } : {}}>
			{/* 左侧---音乐信息区域 */}
			<BottomLeftArea></BottomLeftArea>
			{/* 中间---音乐主控制区域 */}
			<BottomController></BottomController>
			{/* 右侧---其他功能操作区域 */}
			<BottomRightArea></BottomRightArea>
		</PlayerBottomStyles>
	);
};

export default memo(PlayerBottom);
