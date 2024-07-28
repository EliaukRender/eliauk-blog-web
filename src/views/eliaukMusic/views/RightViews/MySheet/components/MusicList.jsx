import React, { memo, useState } from 'react';
import { MusicListStyles } from '@/views/eliaukMusic/views/RightViews/MySheet/styles/MusicListStyle';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';
import SongItem from '@/views/eliaukMusic/views/DrawerContent/CurrentSongList/components/SongItem';
import NoData from '@/views/eliaukMusic/components/NoData/NoData';

/**
 * @description: 歌单列表区域
 */
const MusicList = () => {
	const titleList = [
		{ id: 1, title: '歌曲' },
		{ id: 2, title: '评论' },
	];
	const [curTitleId, setCurTitleId] = useState(1);
	const { sheetSongList } = useSelector(
		(state) => ({
			sheetSongList: state.musicApp.sheetSongList,
		}),
		shallowEqual,
	);

	return (
		<MusicListStyles>
			<div className='top'>
				<div className='left'>
					{titleList.map((item) => {
						return (
							<div
								className={classNames('item', item.id === curTitleId ? 'item-active' : '')}
								key={item.id}
								onClick={() => {
									setCurTitleId(item.id);
								}}>
								<span>{item.title}</span>
								{item.id === 1 && <span>({sheetSongList.length})</span>}
							</div>
						);
					})}
				</div>
				<div className='right'>
					<div className='item'>
						<i className='iconfont icon-sousuo'></i>
						<span>搜索</span>
					</div>
					<div className='item'>
						<i className='iconfont icon-paixu'></i>
						<span>排序</span>
					</div>
				</div>
			</div>

			{/*  歌曲列表 */}
			<div
				className='song-list'
				style={!sheetSongList.length ? { justifyContent: 'center', alignItems: 'center' } : {}}>
				{sheetSongList.map((song, index) => {
					return <SongItem curSong={song} index={index} showAlbum={true} showDuration={true} isSheet={true}></SongItem>;
				})}
				{!sheetSongList.length && <NoData></NoData>}
			</div>
		</MusicListStyles>
	);
};

export default memo(MusicList);
