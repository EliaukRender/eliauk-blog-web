import React, { memo, useEffect, useMemo } from 'react';
import { MusicMiniPictureStyles } from '@/views/eliaukMusic/styles/MusicMiniPictureStyles';
import { setShowFullScreenLyric } from '@/views/eliaukMusic/store/modules/musicAppReducer';
import { motion, useAnimationControls } from 'framer-motion';
import classNames from 'classnames';
import { french_Cool_light_gray } from '@/assets/css/variables';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

/**
 * @description: 歌词封面缩略图
 */
const MusicMiniPicture = () => {
	const dispatch = useDispatch();
	const controls = useAnimationControls();
	const { showFullScreenLyric, songId, songList } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
			songId: state.audio.songId,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);

	useEffect(() => {
		if (!showFullScreenLyric) {
			// 全屏歌词关闭时
			controls.start({ opacity: 0, transition: { duration: 0.5 } });
		} else {
			// 全屏歌词打开时
			controls.start({ opacity: 1, transition: { duration: 0.5 } });
		}
	}, [showFullScreenLyric]);

	// 鼠标进入
	const onMouseEnter = () => {
		if (!showFullScreenLyric) {
			controls.start({ opacity: 1, transition: { duration: 0.5 } });
		}
	};

	// 鼠标离开
	const onMouseLeave = () => {
		if (!showFullScreenLyric) {
			controls.start({ opacity: 0, transition: { duration: 0.5 } });
		}
	};

	// 获取当前歌曲的缩略图
	const getCurSongPic = useMemo(() => {
		return songList.find((item) => item.songId === songId)?.songPic;
	}, [songId, songList]);

	return (
		<MusicMiniPictureStyles>
			<div
				className='music-pic-area'
				onClick={() => {
					dispatch(setShowFullScreenLyric(!showFullScreenLyric));
				}}>
				<motion.div
					className='full-screen'
					animate={controls}
					initial={{ opacity: 0 }}
					onMouseEnter={() => {
						onMouseEnter();
					}}
					onMouseLeave={() => {
						onMouseLeave();
					}}>
					<i
						className={classNames(`iconfont icon-${showFullScreenLyric ? 'zhankaidown' : 'zhankaiup-copy'}`)}
						style={{ color: french_Cool_light_gray }}></i>
				</motion.div>
				<img className='music-pic' src={getCurSongPic || require('@/views/eliaukMusic/images/music-info.png')} alt='' />
			</div>
		</MusicMiniPictureStyles>
	);
};

export default memo(MusicMiniPicture);
