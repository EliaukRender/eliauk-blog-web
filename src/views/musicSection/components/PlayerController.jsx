import React, { memo } from 'react';
import { changeVolume, pauseAudio, playAudio, playNextSong, playPreSong } from '@/views/musicSection/store/actions/audioAction';
import { PlayerControllerStyles } from '@/views/musicSection/styles/PlayerControllerStyles';

/**
 * @description: 底部播放控制区域
 */
const PlayerController = (props) => {
	return (
		<PlayerControllerStyles>
			<button
				onClick={() => {
					playAudio();
				}}>
				开始播放
			</button>
			<button
				onClick={() => {
					pauseAudio();
				}}>
				暂停播放
			</button>
			<button
				onClick={() => {
					changeVolume(volume + 5);
				}}>
				+音量
			</button>
			<button
				onClick={() => {
					changeVolume(volume - 5);
				}}>
				-音量
			</button>
			<button
				onClick={() => {
					playPreSong();
				}}>
				上一首
			</button>
			<button
				onClick={() => {
					playNextSong();
				}}>
				下一首
			</button>
		</PlayerControllerStyles>
	);
};

export default memo(PlayerController);
