import React, { memo } from 'react';
import { SongItemStyles } from '@/views/musicSection/views/MiniPlayer/styles/SongItem';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { music_green_select } from '@/assets/css/variables';
import { motion, useAnimationControls } from 'framer-motion';
import MoveMusicPopover from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MoveMusicPopover';
import { pauseAudio, playAudio } from '@/views/musicSection/store/actions/audioAction';
import classNames from 'classnames';

const variants = {
	show: { opacity: 1, transition: { duration: 0.3 } },
	hidden: { opacity: 0, transition: { duration: 0.3 } },
};

/**
 * @description: mini播放器中的歌曲项
 */
const SongItem = ({ curSong }) => {
	const { songId, isPlaying } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);
	const controls = useAnimationControls();

	const onMouseEnter = () => {
		controls.start('show');
	};

	const onMouseLeave = () => {
		controls.start('hidden');
	};

	// 暂停、播放
	const handlePlayPause = () => {
		// 正在播放、歌曲id相同、歌单相同，才是暂停这首歌
		if (isPlaying) {
			pauseAudio();
			return;
		}
		playAudio(curSong.songId);
	};

	return (
		<SongItemStyles
			onMouseEnter={() => {
				onMouseEnter();
			}}
			onMouseLeave={() => {
				onMouseLeave();
			}}>
			<div className='left' style={curSong.songId === songId ? { color: music_green_select } : {}}>
				<div>{curSong.songName}</div>
				<div>-</div>
				<div>{curSong.singer}</div>
			</div>
			<motion.div className='right' initial={{ opacity: 0 }} variants={variants} animate={controls}>
				<i
					className={classNames('iconfont', isPlaying ? 'icon-zanting' : ' icon-bofang')}
					onClick={() => {
						handlePlayPause();
					}}></i>
				<i className='iconfont icon-xihuan'></i>
				{/* 移动歌曲 */}
				<MoveMusicPopover isSongList={true} curSong={curSong}></MoveMusicPopover>
			</motion.div>
		</SongItemStyles>
	);
};

SongItem.propTypes = {
	curSong: PropTypes.object,
};

export default memo(SongItem);
