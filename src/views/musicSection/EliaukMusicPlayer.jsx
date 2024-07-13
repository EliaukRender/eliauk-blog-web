import React, { memo } from 'react';
import { EliaukMusicPlayerStyles } from '@/views/musicSection/styles/EliaukMusicPlayerStyles';
import PlayerLeft from '@/views/musicSection/layout/PlayerLeft';
import PlayerRight from '@/views/musicSection/layout/PlayerRight';
import PlayerBottom from '@/views/musicSection/layout/PlayerBottom';
import LyricFullScreen from '@/views/musicSection/views/LyricFullScreen/LyricFullScreen';

const EliaukMusicPlayer = () => {
	return (
		<EliaukMusicPlayerStyles>
			<div className='main-area'>
				{/* 左侧菜单区域 */}
				<PlayerLeft></PlayerLeft>
				{/* 右侧主体区域 */}
				<PlayerRight></PlayerRight>
			</div>
			{/* 底部区域 */}
			<div className='bottom-area'>
				<PlayerBottom></PlayerBottom>
			</div>
			{/*	歌词全屏区域 */}
			<LyricFullScreen></LyricFullScreen>
		</EliaukMusicPlayerStyles>
	);
};

export default memo(EliaukMusicPlayer);
