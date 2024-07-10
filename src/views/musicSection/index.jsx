import React, { memo, useEffect } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import { useInView } from 'react-intersection-observer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';
import { getSongListAction } from '@/views/musicSection/store/modules/audioReducer';
import EliaukMusicPlayer from '@/views/musicSection/views/EliaukMusicPlayer';

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
			{/* 音乐播放器 */}
			<EliaukMusicPlayer></EliaukMusicPlayer>
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
