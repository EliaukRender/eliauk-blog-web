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
import { querySongListBySheetIdActon } from '@/views/musicSection/store/modules/musicAppReducer';
import { useNavigate } from 'react-router-dom';
import { useFullScreenPlayer } from '@/views/musicSection/hooks/useFullScreenPlayer';
import { setSongId, setSongList } from '@/views/musicSection/store/modules/audioReducer';
import { getCommonMenuList, getSheetList } from '@/views/musicSection/store/actions/musicAppAction';

/**
 * @description: 音乐播放器主体框架
 */
const EliaukMusicPlayer = () => {
	const { sheetList, menuList, sheetSongList, songList, drawerContentId, maxPlayer } = useSelector(
		(state) => ({
			drawerContentId: state.musicApp.drawerContentId,
			sheetList: state.musicApp.sheetList,
			menuList: state.musicApp.menuList,
			maxPlayer: state.musicApp.maxPlayer,
			sheetSongList: state.musicApp.sheetSongList,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const playerRef = useRef(null);
	useFullScreenPlayer(playerRef); // 全屏操作

	// 调用接口初始化数据
	useEffect(() => {
		// 第一次进入播放器页面，默认定位在'喜欢'菜单
		if (!menuList.length && !sheetList.length) {
			navigate('/music/like');
			getSheetList();
			getCommonMenuList();
			dispatch(querySongListBySheetIdActon(1)); // 获取音乐列表
		}
		// 后续切回到播放器界面
		if (!!menuList.length && !!sheetList.length) {
			navigate('/music/like');
		}
	}, [menuList, sheetList]);

	// 第一次进入时，待播放列表songList没有歌曲，则将【喜欢】歌单的歌曲 作为 待播放歌曲列表
	// 并默认将第一首歌作为待播放歌曲
	useEffect(() => {
		if (!!sheetSongList.length && !songList.length) {
			dispatch(setSongList(sheetSongList));
			dispatch(setSongId(sheetSongList[0].songId));
		}
	}, [sheetSongList, songList]);

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
