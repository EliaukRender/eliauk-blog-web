import React, { memo } from 'react';
import { LyricFullScreenStyles } from '@/views/musicSection/views/LyricFullScreen/LyricFullScreenStyles';
import AudioSpectrumVisualizer from 'src/views/musicSection/components/AnalyzeChart';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setShowFullScreenLyric } from '@/views/musicSection/store/modules/musicAppReducer';

/**
 * @description: 歌词全屏
 */
const LyricFullScreen = () => {
	const dispatch = useDispatch();
	const { showFullScreenLyric } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
		}),
		shallowEqual,
	);

	return (
		<LyricFullScreenStyles style={showFullScreenLyric ? { opacity: 1, pointerEvents: 'auto' } : {}}>
			{/* 关闭歌词全屏 */}
			<i
				className='iconfont icon-xiajiantou'
				onClick={() => {
					dispatch(setShowFullScreenLyric(false));
				}}></i>
			{/* 歌词区域 */}
			<div className='main-body'>
				歌词区域
				<div></div>
				<div></div>
			</div>
			{/* 频谱图 */}
			<AudioSpectrumVisualizer></AudioSpectrumVisualizer>
		</LyricFullScreenStyles>
	);
};

export default memo(LyricFullScreen);
