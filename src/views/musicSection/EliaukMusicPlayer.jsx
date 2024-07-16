import React, { memo, useEffect } from 'react';
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

const EliaukMusicPlayer = () => {
	const { drawerContentId, menuSongList, songList } = useSelector(
		(state) => ({
			drawerContentId: state.musicApp.drawerContentId,
			menuSongList: state.musicApp.menuSongList,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		navigate('/music/like'); // 默认定位在"喜欢"菜单
		dispatch(getSongListAction()); // 获取歌曲列表
		dispatch(getMenuListAction()); // 获取菜单列表
	}, []);

	useEffect(() => {
		// 给songList/songId赋初始值
		if (location.pathname === '/music/like' && !songList?.length && !!menuSongList?.length) {
			dispatch(setSongList(menuSongList));
			dispatch(setSongId(menuSongList[0].songId));
		}
	}, [location, songList, menuSongList]);

	return (
		<EliaukMusicPlayerStyles>
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
