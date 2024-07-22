import React, { memo, useEffect, useState } from 'react';
import { BottomLeftAreaStyles } from '@/views/musicSection/styles/BottomLeftAreaStyles';
import FeatListPopover from '@/views/musicSection/components/BottomArea/LeftAreaCmps/FeatListPopover';
import MusicMiniPicture from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MusicMiniPicture';
import { shallowEqual, useSelector } from 'react-redux';
import { french_Cool_gray, french_Cool_light_gray } from '@/assets/css/variables';

/**
 * @description: 播放器底部左侧区域
 */
const BottomLeftArea = () => {
	const { showFullScreenLyric, songId, songList } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
			songId: state.audio.songId,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const [currentSong, setCurrentSong] = useState({});

	useEffect(() => {
		const curSong = songList.find((song) => song.songId === songId);
		if (!!curSong) {
			setCurrentSong(curSong);
		}
	}, [songId]);

	return (
		<BottomLeftAreaStyles
			style={showFullScreenLyric ? { background: 'linear-gradient(to right, #404647 0%, #404647 100%)' } : {}}>
			{/* 歌曲封面 */}
			<MusicMiniPicture></MusicMiniPicture>
			{/* 歌曲信息 */}
			<div className='info-text'>
				<div className='singer' style={showFullScreenLyric ? { color: french_Cool_gray } : {}}>
					{currentSong?.singer || 'Eliauk'}
				</div>
				<div className='song-name' style={showFullScreenLyric ? { color: french_Cool_light_gray } : {}}>
					{currentSong?.songName || '音乐一下'}
				</div>
			</div>
			<div className='feat-area'>
				{/* 喜欢这首歌 */}
				<img className='heart' src={require('@/views/musicSection/images/icons/heart.png')} alt='' />
				{/* 操作功能列表浮窗 */}
				<FeatListPopover songId={songId}></FeatListPopover>
			</div>
		</BottomLeftAreaStyles>
	);
};

export default memo(BottomLeftArea);
