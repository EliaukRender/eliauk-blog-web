import React, { memo } from 'react';
import { LyricFullScreenStyles } from '@/views/eliaukMusic/views/LyricFullScreen/LyricFullScreenStyles';
import AudioSpectrumVisualizer from '@/views/eliaukMusic/components/AnalyzeChart';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
	setFullScreenPlayer,
	setMaxPlayer,
	setShowFullScreenLyric,
} from '@/views/eliaukMusic/store/modules/musicAppReducer';
import Lyric from '@/views/eliaukMusic/components/Lyric/Lyric';
import JukeBox from '@/views/eliaukMusic/components/JukeBox/JukeBox';

/**
 * @description: 歌词全屏
 */
const LyricFullScreen = () => {
	const dispatch = useDispatch();
	const { showFullScreenLyric, fullScreenPlayer, maxPlayer } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
			maxPlayer: state.musicApp.maxPlayer,
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
				<div className='max-full'>
					{/* 最大化 */}
					{!maxPlayer && (
						<i
							className='iconfont icon-zuidahua'
							onClick={() => {
								if (fullScreenPlayer) {
									return;
								}
								dispatch(setMaxPlayer(true));
							}}></i>
					)}
					{/* 退出最大化 */}
					{maxPlayer && (
						<i
							className='iconfont icon-exitfullscreen'
							onClick={() => {
								if (fullScreenPlayer) {
									return;
								}
								dispatch(setMaxPlayer(false));
							}}></i>
					)}
					{/* 全屏 */}
					{!fullScreenPlayer && (
						<i
							className='iconfont icon-quanping'
							onClick={() => {
								dispatch(setFullScreenPlayer(true));
							}}></i>
					)}
					{/* 退出全屏 */}
					{fullScreenPlayer && (
						<i
							className='iconfont icon-tuichuquanping'
							onClick={() => {
								dispatch(setFullScreenPlayer(false));
							}}></i>
					)}
				</div>
				{/* 歌词区域 */}
				<div className='main-body'>
					{/* 唱片机 */}
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
