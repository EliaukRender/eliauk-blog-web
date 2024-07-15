import React, { memo } from 'react';
import { LyricFullScreenStyles } from '@/views/musicSection/views/LyricFullScreen/LyricFullScreenStyles';
import AudioSpectrumVisualizer from 'src/views/musicSection/components/AnalyzeChart';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setShowFullScreenLyric } from '@/views/musicSection/store/modules/musicAppReducer';
import Lyric from '@/views/musicSection/components/Lyric/Lyric';
import JukeBox from '@/views/musicSection/components/JukeBox/JukeBox';

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
			<div className='body'>
				{/* 关闭歌词全屏按钮 */}
				<i
					className='iconfont icon-xiajiantou'
					onClick={() => {
						dispatch(setShowFullScreenLyric(false));
					}}></i>
				{/* 歌词区域 */}
				<div className='main-body'>
					<JukeBox></JukeBox>
					{/* 歌词 */}
					<Lyric></Lyric>
				</div>
				{/* 频谱图 */}
				<AudioSpectrumVisualizer></AudioSpectrumVisualizer>
			</div>
		</LyricFullScreenStyles>
	);
};

export default memo(LyricFullScreen);
