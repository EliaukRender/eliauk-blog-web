import React, { memo, useState } from 'react';
import { MusicListStyles } from '@/views/musicSection/views/RightViews/MyMusic/styles/MusicListStyle';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';
import SongItem from '@/views/musicSection/views/DrawerContent/CurrentSongList/components/SongItem';
import NoData from '@/views/musicSection/components/NoData/NoData';

/**
 * @description: 歌单列表区域
 */
const MusicList = () => {
	const titleList = [
		{ id: 1, title: '歌曲' },
		{ id: 2, title: '评论' },
	];
	const [curId, setCurId] = useState(1);
	const { menuSongList } = useSelector(
		(state) => ({
			menuSongList: state.musicApp.menuSongList,
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
								className={classNames('item', item.id === curId ? 'item-active' : '')}
								key={item.id}
								onClick={() => {
									setCurId(item.id);
								}}>
								<span>{item.title}</span>
								{item.id === 1 && <span>({menuSongList.length})</span>}
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
			<div className='song-list' style={!menuSongList.length ? { justifyContent: 'center', alignItems: 'center' } : {}}>
				{menuSongList.map((song, index) => {
					return <SongItem song={song} index={index} showAlbum={true} showDuration={true}></SongItem>;
				})}
				{!menuSongList.length && <NoData></NoData>}
			</div>
		</MusicListStyles>
	);
};

export default memo(MusicList);
