import React, { memo, useEffect, useMemo, useRef } from 'react';
import { SongItemStyles } from '@/views/eliaukMusic/views/DrawerContent/CurrentSongList/components/SongItemStyles';
import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { motion, useAnimationControls } from 'framer-motion';
import { deleteSongFromSongList, pauseAudio, playAudio } from '@/views/eliaukMusic/store/actions/audioAction';
import MoveMusicPopover from '@/views/eliaukMusic/components/BottomArea/LeftAreaCmps/MoveMusicPopover';
import { setCurSongListSheetId, setSongList } from '@/views/eliaukMusic/store/modules/audioReducer';
import { Popconfirm } from 'antd';
import { handleDeleteSongFromSheet } from '@/views/eliaukMusic/store/actions/musicAppAction';

/**
 * @description: 歌曲item
 */
const SongItem = ({ curSong, index, showAlbum = false, showDuration = false, isSheet, showDelete = true }) => {
	const { songId, curSongListSheetId, isPlaying, songList, sheetSongList, curSheet } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			isPlaying: state.audio.isPlaying,
			songList: state.audio.songList,
			curSongListSheetId: state.audio.curSongListSheetId,
			sheetSongList: state.musicApp.sheetSongList,
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();
	const controls = useAnimationControls();
	const songItemRef = useRef(null);

	/**
	 * @description:  selectedActiveFlag
	 *                当前歌曲id===当前播放列表中待播歌曲id； 当前播放歌曲列表 == 当前歌单的歌曲列表
	 */
	const selectedActiveFlag = useMemo(() => {
		return curSong.songId === songId && curSheet.sheetId === curSongListSheetId;
	}, [curSong, songId, curSheet, curSongListSheetId]);

	// 鼠标进入时
	const onMouseEnter = () => {
		controls.start({ opacity: 1, transition: { duration: 0.3 } });
	};

	// 鼠标离开时
	const onMouseLeave = () => {
		if (selectedActiveFlag) return; // 如果是当前激活的歌曲，则不隐藏
		controls.start({ opacity: 0, transition: { duration: 0.3 } });
	};

	// 播放当前歌曲、暂停、播放新歌
	const handlePlayPause = () => {
		// 正在播放、歌曲id相同、歌单相同，才是暂停这首歌
		if (isPlaying && selectedActiveFlag) {
			pauseAudio();
			return;
		}
		// 更新播放列表的歌单、更新该歌单对应的歌单id
		if (curSheet.sheetId !== curSongListSheetId) {
			dispatch(setSongList(sheetSongList));
			dispatch(setCurSongListSheetId(curSheet.sheetId));
		}
		// 播放歌曲：继续播、或播新歌
		playAudio(curSong.songId);
	};

	// 删除歌曲
	const handleDeleteSong = async () => {
		// 从歌单中删除
		if (isSheet) {
			await handleDeleteSongFromSheet({ songId: curSong.songId, sheetId: curSheet.sheetId });
			return;
		}
		// 从播放列表中删除
		await deleteSongFromSongList(curSong.songId);
	};

	// 喜欢歌曲
	const handleLikeSong = () => {
		//
	};

	// 确认删除
	const confirm = () => {
		handleDeleteSong();
	};

	// 当前播放歌曲变化时
	useEffect(() => {
		if (selectedActiveFlag) {
			controls.start({ opacity: 1, transition: { duration: 0.3 } });
		} else {
			controls.start({ opacity: 0, transition: { duration: 0.3 } });
		}
	}, [selectedActiveFlag]);

	return (
		<SongItemStyles>
			<motion.div
				ref={songItemRef}
				className={classNames('container', index % 2 === 0 ? 'odd' : '', selectedActiveFlag ? 'active' : '')}
				onMouseEnter={() => {
					onMouseEnter();
				}}
				onMouseLeave={() => {
					onMouseLeave();
				}}>
				{/* 左侧区域 */}
				<div className='left-info-area'>
					{/* 歌曲缩略图： 目前只有10张缩略图可以选择  */}
					<img className='img' src={curSong?.songPic} alt='' />
					{/* 歌手名、歌名 */}
					<div className='curSong-info'>
						<div className='ellipsis'>{curSong?.songName || '--'}</div>
						<div className='singer ellipsis'>{curSong?.singer || '--'}</div>
					</div>
					{/* 图片上的遮罩层 */}
					<motion.div className='mask' initial={{ opacity: 0 }} animate={controls}>
						<i
							className={classNames('iconfont', isPlaying && selectedActiveFlag ? 'icon-zanting' : 'icon-bofang')}
							style={{ color: '#ffffff' }}
							onClick={() => {
								handlePlayPause();
							}}></i>
					</motion.div>
				</div>

				{/*  操作按钮区域  */}
				<motion.div className='operation' initial={{ opacity: 0 }} animate={controls}>
					{/* 喜欢 */}
					<img
						className='heart'
						src={require('@/views/eliaukMusic/images/icons/heart.png')}
						alt=''
						onClick={() => {
							handleLikeSong();
						}}
					/>
					{/* 移动歌曲 */}
					<MoveMusicPopover isSongList={true} curSong={curSong}></MoveMusicPopover>
					{/* 删除歌曲 */}
					{showDelete && (
						<Popconfirm
							title='确认删除?'
							description={isSheet ? '删除后，该歌单不再包含该歌曲信息。' : '删除后，当前播放列表不再播放该歌曲。'}
							onConfirm={confirm}
							okText='删除'
							cancelText='取消'>
							<i className='iconfont icon-shanchu' title={isSheet ? '从歌单中删除' : '从播放列表中删除'}></i>
						</Popconfirm>
					)}
				</motion.div>

				{/* 歌曲时长、专辑信息 */}
				{showAlbum && <div className='album ellipsis'>{curSong?.album || '无专辑'}</div>}
				{showDuration && <div className='duration ellipsis'>{curSong?.duration || '无时长'}</div>}
			</motion.div>
		</SongItemStyles>
	);
};

SongItem.propTypes = {
	curSong: PropTypes.object,
	index: PropTypes.number,
	showAlbum: PropTypes.bool, // 是否显示专辑
	showDuration: PropTypes.bool, // 是否显示时长
	showDelete: PropTypes.bool, // 是否显示删除按钮
};

export default memo(SongItem);
