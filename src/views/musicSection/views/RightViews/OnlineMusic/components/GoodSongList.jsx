import React, { memo } from 'react';
import { GoodSongListStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/GoodSongListStyles';
import { shallowEqual, useSelector } from 'react-redux';
import SongCard from '@/views/musicSection/views/RightViews/OnlineMusic/components/SongCard';

/**
 * @description: 精选歌曲
 */
const GoodSongList = () => {
	const { menuSongList } = useSelector(
		(state) => ({
			menuSongList: state.musicApp.menuSongList,
		}),
		shallowEqual,
	);

	return (
		<GoodSongListStyles>
			{menuSongList?.map((song) => {
				return <SongCard song={song} imageNum={2}></SongCard>;
			})}
		</GoodSongListStyles>
	);
};

export default memo(GoodSongList);
