import React, { memo, useEffect } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import { getSongListAction } from '@/views/musicSection/store/modules/audioReducer';
import EliaukMusicPlayer from '@/views/musicSection/EliaukMusicPlayer';
import { useDispatch } from 'react-redux';

/**
 * @description：音乐
 */
const MusicSection = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongListAction()); // 获取歌曲列表
	}, []);

	return (
		<MusicSectionStyles>
			{/* 音乐播放器 */}
			<EliaukMusicPlayer></EliaukMusicPlayer>
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
