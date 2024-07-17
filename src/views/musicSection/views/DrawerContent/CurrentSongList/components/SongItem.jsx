import React, { memo, useCallback, useEffect, useRef } from 'react';
import { SongItemStyles } from '@/views/musicSection/views/DrawerContent/CurrentSongList/components/SongItemStyles';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';
import classNames from 'classnames';
import { motion, useAnimationControls } from 'framer-motion';
import { pauseAudio, playAudio } from '@/views/musicSection/store/actions/audioAction';
import MoveMusicPopover from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MoveMusicPopover';

/**
 * @description: 歌曲item
 */
const SongItem = ({ song, index, showAlbum = false, showDuration = false }) => {
	const { songId, isPlaying } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);
	const controls = useAnimationControls();
	const songItemRef = useRef(null);

	// 鼠标进入时
	const onMouseEnter = useCallback(() => {
		controls.start({ opacity: 1, transition: { duration: 0.3 } });
	}, [songId]);

	// 鼠标离开时
	const onMouseLeave = useCallback(() => {
		if (song.songId === songId) return;
		controls.start({ opacity: 0, transition: { duration: 0.3 } });
	}, [songId]);

	// 播放当前歌曲、暂停、播放新歌
	const handlePlayPause = useCallback(() => {
		// 正在播放，播放id===当前这首歌id，则是为了暂停
		if (isPlaying && songId === song.songId) {
			pauseAudio();
		} else {
			// 继续播放本歌曲或者播放新歌
			playAudio(song.songId);
		}
	}, [isPlaying, songId]);

	// 当前播放歌曲变化时
	useEffect(() => {
		// 当前播放歌曲id等于当前歌曲id
		if (song.songId === songId) {
			controls.start({ opacity: 1, transition: { duration: 0.3 } });
		} else {
			controls.start({ opacity: 0, transition: { duration: 0.3 } });
		}

		songItemRef.current.addEventListener('dblclick', handlePlayPause);

		return () => {
			songItemRef.current && songItemRef.current.removeEventListener('dblclick', handlePlayPause);
		};
	}, [songId, isPlaying]);

	return (
		<SongItemStyles>
			<motion.div
				ref={songItemRef}
				className={classNames('container', index % 2 === 0 ? 'odd' : '', song.songId === songId ? 'active' : '')}
				onMouseEnter={() => {
					onMouseEnter();
				}}
				onMouseLeave={() => {
					onMouseLeave();
				}}>
				{/* 左侧区域 */}
				<div className='left-info-area'>
					{/* 歌曲缩略图 */}
					<img className='img' src={require('@/views/musicSection/images/icons/music-pic.png')} alt='' />
					{/* 歌手名、歌名 */}
					<div className='song-info'>
						<div className='ellipsis'>{song?.songName || '--'}</div>
						<div className='singer ellipsis'>{song?.singer || '--'}</div>
					</div>
					{/* 图片上的遮罩层 */}
					<motion.div className='mask' initial={{ opacity: 0 }} animate={controls}>
						<i
							className={classNames('iconfont', isPlaying && song.songId === songId ? 'icon-zanting' : 'icon-bofang')}
							style={{ color: '#ffffff' }}
							onClick={() => {
								handlePlayPause();
							}}></i>
					</motion.div>
				</div>

				{/*  操作按钮区域  */}
				<motion.div className='operation' initial={{ opacity: 0 }} animate={controls}>
					{/* 喜欢 */}
					<img className='heart' src={require('@/views/musicSection/images/icons/heart.png')} alt='' />
					{/* 移动歌曲 */}
					<MoveMusicPopover showMode={false}></MoveMusicPopover>
				</motion.div>

				{/* 歌曲时长、专辑信息 */}
				{showAlbum && <div className='album ellipsis'>{song?.album || '无专辑'}</div>}
				{showDuration && <div className='duration ellipsis'>{song?.duration || '无时长'}</div>}
			</motion.div>
		</SongItemStyles>
	);
};

SongItem.propTypes = {
	song: PropTypes.object,
	index: PropTypes.number,
	showAlbum: PropTypes.bool, // 是否显示专辑
	showDuration: PropTypes.bool, // 是否显示时长
};

export default memo(SongItem);
