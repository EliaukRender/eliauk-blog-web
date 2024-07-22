import React, { memo, useEffect, useRef } from 'react';
import { EliaukMusicPlayerStyles } from '@/views/musicSection/styles/EliaukMusicPlayerStyles';
import PlayerLeft from '@/views/musicSection/layout/PlayerLeft';
import PlayerRight from '@/views/musicSection/layout/PlayerRight';
import PlayerBottom from '@/views/musicSection/layout/PlayerBottom';
import LyricFullScreen from '@/views/musicSection/views/LyricFullScreen/LyricFullScreen';
import PlayerDrawer from '@/views/musicSection/components/PlayerDrawer/PlayerDrawer';
import { shallowEqual, useSelector } from 'react-redux';
import SelectorAnalyze from '@/views/musicSection/views/DrawerContent/SelectorAnalyze/SelectorAnalyze';
import CurrentSongList from '@/views/musicSection/views/DrawerContent/CurrentSongList/CurrentSongList';
import { useNavigate } from 'react-router-dom';
import { useFullScreenPlayer } from '@/views/musicSection/hooks/useFullScreenPlayer';
import { initPlayerData } from '@/views/musicSection/store/actions/musicAppAction';
import MiniPlayer from '@/views/musicSection/views/MiniPlayer/MiniPlayer';

/**
 * @description: 音乐播放器主体框架
 */
const EliaukMusicPlayer = () => {
	const { drawerContentId, maxPlayer } = useSelector(
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
	const navigate = useNavigate();
	const playerRef = useRef(null);
	useFullScreenPlayer(playerRef); // 全屏操作

	// 初始化播放器数据
	useEffect(() => {
		navigate('/music/like');
		initPlayerData();
	}, []);

	return (
		<EliaukMusicPlayerStyles
			ref={playerRef}
			style={
				maxPlayer
					? { width: '100%', height: '100%', transition: 'width 0.3s ease, height 0.3s ease' }
					: {
							width: '50%',
							height: '70%',
							transition: 'width 0.3s ease, height 0.3s ease',
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
