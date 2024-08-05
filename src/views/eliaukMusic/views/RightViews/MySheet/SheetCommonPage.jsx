import React, { memo, useEffect } from 'react';
import MenuMusicInfoArea from '@/views/eliaukMusic/views/RightViews/MySheet/components/MusicListInfo';
import { CommonPageStyles } from '@/views/eliaukMusic/views/RightViews/MySheet/styles/CommonPageStyles';
import MusicList from '@/views/eliaukMusic/views/RightViews/MySheet/components/MusicList';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSheetSongList } from '@/views/eliaukMusic/store/modules/musicAppReducer';
import { getSongListBySheetId } from '@/views/eliaukMusic/store/actions/musicAppAction';

/**
 * @description: 歌单公共主页面：包括 在线歌单、自建歌单
 */
const SheetCommonPage = () => {
	const location = useLocation();
	const onlineSheetInfo = location.state; // [在线歌单]信息
	const dispatch = useDispatch();

	useEffect(() => {
		// 判断是不是在线歌单
		const list = Object.keys(onlineSheetInfo || {});
		if (!list?.length) {
			return;
		}
		// 清空当前歌单对应的歌曲列表
		dispatch(setSheetSongList([]));
		// 获取歌单的歌曲列表
		getSongListBySheetId({
			sheetId: onlineSheetInfo.sheetId,
			isOnline: true,
		});
	}, [location]);

	return (
		<CommonPageStyles>
			{/* 歌单信息介绍 */}
			<MenuMusicInfoArea onlineSheetInfo={onlineSheetInfo}></MenuMusicInfoArea>
			{/* 歌单区域 */}
			<MusicList onlineSheetInfo={onlineSheetInfo}></MusicList>
		</CommonPageStyles>
	);
};

export default memo(SheetCommonPage);
