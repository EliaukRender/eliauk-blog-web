import React, { memo, useEffect, useMemo, useState } from 'react';
import { MiniPlayerStyles } from '@/views/musicSection/views/MiniPlayer/styles/MiniPlayerStyles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { motion, useAnimationControls } from 'framer-motion';
import { CaretRightOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { pauseAudio, playAudio, playNextSong, playPreSong } from '@/views/musicSection/store/actions/audioAction';
import { setMiniPlayer } from '@/views/musicSection/store/modules/musicAppReducer';
import SongList from '@/views/musicSection/views/MiniPlayer/components/SongList';
import { music_green_select } from '@/assets/css/variables';

// 动画参数
const maskVariants = {
	showMask: { opacity: 1, transition: { duration: 0.3, ease: 'linear' } },
	hiddenMask: { opacity: 0, transition: { duration: 0.3, ease: 'linear' } },
};

const showSongListVariants = {
	/* 歌曲列表高度200px */
	showList: { opacity: 1, height: 200, transition: { duration: 0.3, ease: 'linear' } },
	hiddenList: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'linear' } },
};

const positionVariants = {
	topPosition: { top: window.innerHeight - 70 - 200, height: 270, transition: { duration: 0.3, ease: 'linear' } },
	downPosition: { top: window.innerHeight - 70, height: 70, transition: { duration: 0.3, ease: 'linear' } },
};

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
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const controls = useAnimationControls();
	const [showControlBtn, setShowControlBtn] = useState(false);

	// 当前歌曲信息
	const curSong = useMemo(() => {
		return songList.find((item) => item.songId === songId);
	}, [songId, songList]);

	useEffect(() => {
		// 打开关闭歌曲列表动画
		controls.start(open ? 'topPosition' : 'downPosition');
		controls.start(open ? 'showList' : 'hiddenList');
	}, [open]);

	return (
		<motion.div
			animate={controls}
			variants={positionVariants}
			initial={{
				height: 70,
				position: 'fixed',
				top: window.innerHeight - 70,
				left: window.innerWidth - 330 - 100,
			}}>
			<MiniPlayerStyles style={{ opacity: miniPlayer ? 1 : 0 }}>
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
							<i
								className='iconfont icon-liebiao'
								style={open ? { color: music_green_select } : {}}
								onClick={() => {
									setOpen(!open);
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
	);
};

export default memo(MiniPlayer);
