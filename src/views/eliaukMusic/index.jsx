import React, { memo } from 'react';
import { MusicSectionStyles } from '@/views/eliaukMusic/styles';
import EliaukMusicPlayer from '@/views/eliaukMusic/EliaukMusicPlayer';

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
