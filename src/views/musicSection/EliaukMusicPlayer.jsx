import React, { memo, useEffect, useRef } from 'react';
import { EliaukMusicPlayerStyles } from '@/views/musicSection/styles/EliaukMusicPlayerStyles';
import PlayerLeft from '@/views/musicSection/layout/PlayerLeft';
import PlayerRight from '@/views/musicSection/layout/PlayerRight';
import PlayerBottom from '@/views/musicSection/layout/PlayerBottom';
import LyricFullScreen from '@/views/musicSection/views/LyricFullScreen/LyricFullScreen';
import PlayerDrawer from '@/views/musicSection/components/PlayerDrawer/PlayerDrawer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SelectorAnalyze from '@/views/musicSection/views/DrawerContent/SelectorAnalyze/SelectorAnalyze';
import CurrentSongList from '@/views/musicSection/views/DrawerContent/CurrentSongList/CurrentSongList';
import { getMenuListAction, getSongListAction } from '@/views/musicSection/store/modules/musicAppReducer';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSongId, setSongList } from '@/views/musicSection/store/modules/audioReducer';
import { useFullScreenPlayer } from '@/views/musicSection/hooks/useFullScreenPlayer';

/**
 * @description: 音乐播放器主体框架
 */
const EliaukMusicPlayer = () => {
	const { drawerContentId, menuSongList, songList, maxPlayer, curMenuId, menuList } = useSelector(
		(state) => ({
			drawerContentId: state.musicApp.drawerContentId,
			menuSongList: state.musicApp.menuSongList,
			menuList: state.musicApp.menuList,
			maxPlayer: state.musicApp.maxPlayer,
			curMenuId: state.musicApp.curMenuId,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const playerRef = useRef(null);
	useFullScreenPlayer(playerRef); // 全屏操作

	// 调用接口初始化数据
	useEffect(() => {
		// 第一次进入播放器页面，默认定位在'喜欢'菜单
		if (!menuList.length) {
			navigate('/music/like');
			dispatch(getMenuListAction()); // 获取菜单列表
		} else {
			const menu = menuList.find((menu) => menu.menuId === curMenuId);
			navigate(`/music${menu?.menuPath}`);
		}
		dispatch(getSongListAction(curMenuId)); // 获取当前菜单对应的歌曲列表
	}, [curMenuId]);

	useEffect(() => {
		// 给songList/songId赋初始值
		if (location.pathname === '/music/like' && !songList?.length && !!menuSongList?.length) {
			dispatch(setSongList(menuSongList));
			dispatch(setSongId(menuSongList[0].songId));
		}
	}, [location, songList, menuSongList]);

	return (
		<EliaukMusicPlayerStyles
			ref={playerRef}
			style={
				maxPlayer
					? { width: '100%', height: '100%', transition: 'width 0.5s ease, height 0.5s ease' }
					: {
							width: '50%',
							height: '70%',
							transition: 'width 0.5s ease, height 0.5s ease',
						}
			}>
			<div className='main-area'>
				{/* 左侧菜单区域 */}
				<PlayerLeft></PlayerLeft>
				{/* 右侧主体区域 */}
				<PlayerRight></PlayerRight>
			</div>
			{/* 底部区域 */}
			<div className='bottom-area'>
				<PlayerBottom></PlayerBottom>
			</div>
			{/*	歌词全屏区域 */}
			<LyricFullScreen></LyricFullScreen>
			{/* 右侧全局抽屉 */}
			<PlayerDrawer>
				{drawerContentId === 1 && <SelectorAnalyze></SelectorAnalyze>}
				{drawerContentId === 2 && <CurrentSongList></CurrentSongList>}
			</PlayerDrawer>
		</EliaukMusicPlayerStyles>
	);
};

export default memo(EliaukMusicPlayer);
