import React, { memo } from 'react';
import { PlayerBottomStyles } from '@/views/musicSection/styles/PlayerBottomStyles';
import BottomMusicInfo from '@/views/musicSection/components/BottomArea/LeftAreaCmps/BottomLeftArea';
import BottomController from '@/views/musicSection/components/BottomArea/MiddleAreaCmps/BottomMiddleArea';
import BottomOperation from '@/views/musicSection/components/BottomArea/RightArea/BottomRightArea';

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
