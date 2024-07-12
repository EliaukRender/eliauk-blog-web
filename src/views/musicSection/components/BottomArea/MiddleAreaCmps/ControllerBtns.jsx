import React, { memo } from 'react';
import { BackwardOutlined, CaretRightOutlined, ForwardOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import {
	addCurrentTime,
	decreaseCurrentTime,
	pauseAudio,
	playAudio,
	playNextSong,
	playPreSong,
} from '@/views/musicSection/store/actions/audioAction';
import { ControllerBtnsStyles } from '@/views/musicSection/styles/ControllerBtnsStyles';
import { shallowEqual, useSelector } from 'react-redux';
import VolumeAdjuster from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/VolumeAdjuster';
import MusicMode from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/MusicMode';

const ControllerBtns = () => {
	const { isPlaying } = useSelector(
		(state) => ({
			isPause: state.audio.isPause,
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);

	return (
		<ControllerBtnsStyles>
			{/* 音乐播放模式控制器 */}
			<MusicMode></MusicMode>
			{/* 后退 */}
			<BackwardOutlined
				onClick={() => {
					decreaseCurrentTime();
				}}
			/>
			{/* 上一首 */}
			<StepBackwardOutlined
				onClick={() => {
					playPreSong();
				}}
			/>
			{/* 播放暂停 */}
			<div className='play-pause'>
				{!isPlaying && (
					<CaretRightOutlined
						onClick={() => {
							playAudio();
						}}
					/>
				)}
				{isPlaying && (
					<PauseOutlined
						onClick={() => {
							pauseAudio();
						}}
					/>
				)}
			</div>
			{/* 下一首 */}
			<StepForwardOutlined
				onClick={() => {
					playNextSong(true);
				}}
			/>
			{/* 快进 */}
			<ForwardOutlined
				onClick={() => {
					addCurrentTime();
				}}
			/>
			{/* 音量调节器 */}
			<VolumeAdjuster></VolumeAdjuster>
		</ControllerBtnsStyles>
	);
};

export default memo(ControllerBtns);
