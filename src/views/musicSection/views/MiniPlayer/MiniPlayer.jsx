import React, { memo, useMemo, useState } from 'react';
import { MiniPlayerStyles } from '@/views/musicSection/views/MiniPlayer/MiniPlayerStyles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { motion, useAnimationControls } from 'framer-motion';
import { CaretRightOutlined, PauseOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import { pauseAudio, playAudio, playNextSong, playPreSong } from '@/views/musicSection/store/actions/audioAction';
import { setMiniPlayer } from '@/views/musicSection/store/modules/musicAppReducer';
import { useDragMiniPlayer } from '@/views/musicSection/hooks/useDragMiniPlayer';

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
	const controls = useAnimationControls();
	const [showControlBtn, setShowControlBtn] = useState(false);
	const { position, handleMouseDown, handleMouseMove, handleMouseUp } = useDragMiniPlayer();

	// 当前歌曲信息
	const curSong = useMemo(() => {
		return songList.find((item) => item.songId === songId);
	}, [songId, songList]);

	const onMouseEnter = () => {
		controls.start({ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } });
	};

	const onMouseLeave = () => {
		controls.start({ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } });
	};

	return (
		<MiniPlayerStyles
			style={{
				position: 'fixed',
				top: position.y,
				left: position.x,
				cursor: 'move',
			}}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}>
			{miniPlayer && (
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
						onMouseEnter={() => {
							onMouseEnter();
						}}
						onMouseLeave={() => {
							onMouseLeave();
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
							<i className='iconfont icon-liebiao'></i>
						</div>
					)}
				</div>
			)}
		</MiniPlayerStyles>
	);
};

export default memo(MiniPlayer);
