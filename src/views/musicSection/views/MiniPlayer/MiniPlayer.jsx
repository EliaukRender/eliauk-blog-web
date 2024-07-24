import React, { memo, useMemo, useState } from 'react';
import { MiniPlayerStyles } from '@/views/musicSection/views/MiniPlayer/styles/MiniPlayerStyles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { CaretRightOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { pauseAudio, playAudio, playNextSong, playPreSong } from '@/views/musicSection/store/actions/audioAction';
import { setMiniPlayer } from '@/views/musicSection/store/modules/musicAppReducer';
import SongList from '@/views/musicSection/views/MiniPlayer/components/SongList';
import { music_green_select } from '@/assets/css/variables';
import Draggable from 'react-draggable';
import { useMiniPlayerAnimation } from '@/views/musicSection/hooks/useMiniPlayerAnimation';

/**
 * @description: 最小化的播放器
 */
const MiniPlayer = () => {
	const { songId, songList, miniPlayer, isPlaying } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			songList: state.audio.songList,
			isPlaying: state.audio.isPlaying,
			miniPlayer: state.musicApp.miniPlayer,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();
	const [showControlBtn, setShowControlBtn] = useState(false);
	const {
		playerRef,
		bounds,
		setOpen,
		setBounds,
		open,
		controls,
		INITIAL_WIDTH,
		INITIAL_HEIGHT,
		SONG_LIST_HEIGHT,
		maskVariants,
		showSongListVariants,
		positionHeightVariants,
	} = useMiniPlayerAnimation(); // 动画hook

	// 当前歌曲信息
	const curSong = useMemo(() => {
		return songList.find((item) => item.songId === songId);
	}, [songId, songList]);

	const stopDrag = (e) => {
		console.log('e', e);
		console.log(window.innerWidth);
		console.log(window.innerHeight);
		console.log('结束', playerRef.current?.getBoundingClientRect());
	};

	const handleClickExpand = () => {
		setOpen(!open);
	};

	return (
		<Draggable bounds={bounds} onStop={stopDrag}>
			<motion.div
				ref={playerRef}
				animate={controls}
				variants={positionHeightVariants}
				initial={{
					width: INITIAL_WIDTH,
					height: INITIAL_HEIGHT,
					position: 'fixed',
					top: window.innerHeight - INITIAL_HEIGHT,
					left: window.innerWidth - INITIAL_WIDTH - 100,
					zIndex: 9999,
				}}>
				<MiniPlayerStyles style={{ opacity: miniPlayer ? 1 : 0, backgroundColor: open ? '#ffffff' : 'transparent' }}>
					<div
						className='body'
						onMouseEnter={() => {
							setShowControlBtn(true);
						}}
						onMouseLeave={() => {
							setShowControlBtn(false);
						}}>
						{/* 关闭按钮 */}
						{showControlBtn && (
							<i
								className='iconfont icon-guanbi'
								onClick={() => {
									dispatch(setMiniPlayer(false));
								}}></i>
						)}
						{/* 歌曲缩略图、遮罩层 */}
						<img className='image' src={curSong?.songPic} alt='' />
						<motion.div
							className='image mask'
							initial={{ opacity: 0 }}
							animate={controls}
							variants={maskVariants}
							onMouseEnter={() => {
								controls.start('showMask');
							}}
							onMouseLeave={() => {
								controls.start('hiddenMask');
							}}>
							<i className='iconfont icon-icon_qqyinyue'></i>
						</motion.div>
						{/* 歌曲文字信息 */}
						{!showControlBtn && (
							<div className='song-info'>
								<div className='name'>{curSong?.songName}</div>
								<div className='singer'>{curSong?.singer}</div>
							</div>
						)}
						{/* 控制按钮 */}
						{showControlBtn && (
							<div className='control'>
								<i className='iconfont icon-xihuan'></i>
								<StepBackwardOutlined
									onClick={() => {
										playPreSong();
									}}
								/>
								{/* 播放暂停 */}
								<div className='play-pause'>
									{!isPlaying && (
										<CaretRightOutlined
											onClick={() => {
												playAudio();
											}}
										/>
									)}
									{isPlaying && (
										<PauseOutlined
											onClick={() => {
												pauseAudio();
											}}
										/>
									)}
								</div>
								{/* 下一首 */}
								<StepForwardOutlined
									onClick={() => {
										playNextSong(true);
									}}
								/>
								{/* 列表展开折叠按钮 */}
								<i
									className='iconfont icon-liebiao'
									style={open ? { color: music_green_select } : {}}
									onClick={() => {
										handleClickExpand();
									}}></i>
							</div>
						)}
					</div>
					<motion.div
						className='song-list-box'
						initial={{ opacity: 0, height: 0 }}
						variants={showSongListVariants}
						animate={controls}>
						<SongList></SongList>
					</motion.div>
				</MiniPlayerStyles>
			</motion.div>
		</Draggable>
	);
};

export default memo(MiniPlayer);
