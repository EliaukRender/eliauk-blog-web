import React, { memo } from 'react';
import { CurrentSongListStyles } from '@/views/eliaukMusic/views/DrawerContent/CurrentSongList/CurrentSongListStyles';
import { shallowEqual, useSelector } from 'react-redux';
import SongItem from '@/views/eliaukMusic/views/DrawerContent/CurrentSongList/components/SongItem';

/**
 * @description: 当前歌曲播放列表
 */
const CurrentSongList = () => {
	const { songList } = useSelector(
		(state) => ({
			songList: state.audio.songList,
		}),
		shallowEqual,
	);

	return (
		<CurrentSongListStyles>
			<div className='title'>当前播放歌曲列表</div>
			<div className='song-list'>
				{songList.map((song, index) => {
					return <SongItem curSong={song} index={index} isSheet={false}></SongItem>;
				})}
			</div>
		</CurrentSongListStyles>
	);
};

export default memo(CurrentSongList);
