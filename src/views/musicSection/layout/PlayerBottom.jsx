import React, { memo } from 'react';
import { PlayerBottomStyles } from '@/views/musicSection/styles/PlayerBottomStyles';
import BottomMusicInfo from '@/views/musicSection/components/BottomArea/BottomMusicInfo';
import BottomController from '@/views/musicSection/components/BottomArea/BottomController';
import BottomOperation from '@/views/musicSection/components/BottomArea/BottomOperation';

const PlayerBottom = () => {
	return (
		<PlayerBottomStyles>
			<BottomMusicInfo></BottomMusicInfo>
			<BottomController></BottomController>
			<BottomOperation></BottomOperation>
		</PlayerBottomStyles>
	);
};

export default memo(PlayerBottom);
