import React, { memo } from 'react';
import { MusicSectionStyles } from '@/views/musicSection/styles';
import EliaukMusicPlayer from '@/views/musicSection/EliaukMusicPlayer';

/**
 * @description：音乐
 */
const MusicSection = () => {
	return (
		<MusicSectionStyles>
			{/* 音乐播放器 */}
			<EliaukMusicPlayer></EliaukMusicPlayer>
		</MusicSectionStyles>
	);
};

export default memo(MusicSection);
