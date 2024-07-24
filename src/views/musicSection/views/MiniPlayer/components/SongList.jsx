import React, { memo } from 'react';
import { SongListStyles } from '@/views/musicSection/views/MiniPlayer/styles/SongList';
import { shallowEqual, useSelector } from 'react-redux';
import SongItem from '@/views/musicSection/views/MiniPlayer/components/SongItem';

const SongList = () => {
	const { songList } = useSelector(
		(state) => ({
			songList: state.audio.songList,
		}),
		shallowEqual,
	);

	return (
		<SongListStyles>
			{songList?.map((song) => {
				return <SongItem curSong={song}></SongItem>;
			})}
		</SongListStyles>
	);
};

export default memo(SongList);
