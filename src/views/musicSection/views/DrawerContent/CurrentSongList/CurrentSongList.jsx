import React, { memo } from 'react';
import { CurrentSongListStyles } from '@/views/musicSection/views/DrawerContent/CurrentSongList/CurrentSongListStyles';

const CurrentSongList = () => {
	return <CurrentSongListStyles>当前播放歌曲列表</CurrentSongListStyles>;
};

export default memo(CurrentSongList);
