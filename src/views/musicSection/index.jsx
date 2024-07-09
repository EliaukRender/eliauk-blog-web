import React, { memo, useEffect } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import { useInView } from 'react-intersection-observer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';
import { changeVolume, pauseAudio, playAudio, playNextSong, playPreSong } from '@/store/actions/musicPlayerAction';
import { getSongListAction } from '@/store/modules/musicPlayerReducer';

/**
 * @description：音乐
 */
const MusicSection = () => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();
	const { volume } = useSelector(
		(state) => ({
			volume: state.musicPlayer.volume,
		}),
		shallowEqual,
	);

	useEffect(() => {
		if (inView) {
			dispatch(setCurSectionId(3));
			dispatch(getSongListAction()); // 获取歌曲列表
		}
	}, [inView]);

	return (
		<MusicSectionStyles ref={ref}>
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
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
