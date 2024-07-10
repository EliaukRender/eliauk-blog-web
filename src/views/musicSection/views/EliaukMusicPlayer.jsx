import React, { memo } from 'react';
import { EliaukMusicPlayerStyles } from '@/views/musicSection/styles/EliaukMusicPlayerStyles';
import PlayerLeft from '@/views/musicSection/views/PlayerLeft';
import PlayerRight from '@/views/musicSection/views/PlayerRight';
import PlayerController from '@/views/musicSection/components/PlayerController';

const EliaukMusicPlayer = (props) => {
	return (
		<EliaukMusicPlayerStyles>
			<div className='main-area'>
				{/* 左侧菜单区域 */}
				<PlayerLeft></PlayerLeft>
				{/* 右侧主体区域 */}
				<PlayerRight></PlayerRight>
			</div>
			<div className='bottom-area'>
				<PlayerController></PlayerController>
			</div>
		</EliaukMusicPlayerStyles>
	);
};

export default memo(EliaukMusicPlayer);
