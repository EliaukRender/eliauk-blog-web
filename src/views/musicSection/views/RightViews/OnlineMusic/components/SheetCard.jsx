import React, { memo, useCallback, useEffect, useRef } from 'react';
import { SheetCardStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/SheetCardStyles';
import PropTypes from 'prop-types';
import { motion, useAnimationControls } from 'framer-motion';
import { shallowEqual, useSelector } from 'react-redux';
import { pauseAudio, playAudio } from '@/views/musicSection/store/actions/audioAction';

/**
 * @description: 音乐馆 歌单卡片
 */
const SheetCard = ({ sheetInfo, sheetImage, imageWidth }) => {
	const songCardRef = useRef(null);
	const { songId, isPlaying } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);
	const { fullScreenPlayer, maxPlayer } = useSelector(
		(state) => ({
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
			maxPlayer: state.musicApp.maxPlayer,
		}),
		shallowEqual,
	);
	const controls = useAnimationControls();
	const staticMove = {
		static: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
		move: { y: -5, transition: { duration: 0.3, ease: 'easeOut' } },
	};

	const showHidden = {
		show: { opacity: 1, transition: { duration: 0.3 } },
		hidden: { opacity: 0, transition: { duration: 0.3 } },
	};

	// 鼠标进入
	const onMouseEnter = () => {
		controls.start('show');
		controls.start('move');
	};

	// 鼠标离开
	const onMouseLeave = () => {
		controls.start('static');
		controls.start('hidden');
	};

	// 播放当前歌曲、暂停、播放新歌
	const handlePlayPause = useCallback(() => {
		// 正在播放，播放id===当前这首歌id，则是为了暂停
		if (isPlaying && songId === sheetInfo.songId) {
			pauseAudio();
		} else {
			// 继续播放本歌曲或者播放新歌
			playAudio(sheetInfo.songId);
		}
	}, [isPlaying, songId]);

	// 监听鼠标双击事件
	useEffect(() => {
		songCardRef.current.addEventListener('dblclick', handlePlayPause);

		return () => {
			songCardRef.current && songCardRef.current.removeEventListener('dblclick', handlePlayPause);
		};
	}, []);

	return (
		<SheetCardStyles className='sheet-card'>
			<motion.div
				ref={songCardRef}
				animate={controls}
				variants={staticMove}
				initial={'static'}
				className='card'
				onMouseEnter={() => {
					onMouseEnter();
				}}
				onMouseLeave={() => {
					onMouseLeave();
				}}
				style={{ width: imageWidth }}>
				<img className='image' src={sheetImage} alt='' />
				<motion.div className='mask' initial={'hidden'} variants={showHidden} animate={controls}></motion.div>
				<i className='iconfont icon-icon_qqyinyue'></i>
				<motion.div className='play-btn' initial={'hidden'} variants={showHidden} animate={controls}>
					<i className='iconfont icon-bofang'></i>
				</motion.div>
			</motion.div>
			<div className='sheetInfo-name'>{sheetInfo?.songName}</div>
		</SheetCardStyles>
	);
};

SheetCard.propTypes = {
	sheetImage: PropTypes.string,
	sheetInfo: PropTypes.object,
};
export default memo(SheetCard);
