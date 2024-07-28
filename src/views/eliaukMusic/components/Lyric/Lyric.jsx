import React, { memo, useEffect, useRef, useState } from 'react';
import { transformLyric } from '@/views/eliaukMusic/utils/transformLyric';
import { LyricStyles } from '@/views/eliaukMusic/components/Lyric/LyricStyles';
import { shallowEqual, useSelector } from 'react-redux';
import { audio } from '@/views/eliaukMusic/store/actions/audioAction.js';

/**
 * @description: 歌词
 */
const Lyric = () => {
	const { songId, songList } = useSelector(
		(state) => ({
			songId: state.audio.songId,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const [currentTime, setCurrentTime] = useState(0);
	const lyricBoxRef = useRef(null);
	const [oldIndex, setOldIndex] = useState(0);
	const [lyricList, setLyricList] = useState([]); // 每句歌词列表

	/**
	 * @description: 歌曲切换时更新歌词
	 */
	useEffect(() => {
		const currentSong = songList.find((song) => song.songId === songId);
		if (!!currentSong) {
			const list = transformLyric(currentSong.lyric);
			setLyricList(list);
			setOldIndex(0); // 重置索引值
			// 清除动画效果
			const childrenList = lyricBoxRef.current.querySelectorAll('.lyric-text');
			childrenList.forEach((item) => {
				item.style.animation = 'none';
				item.style.fontWeight = '400';
			});
			// 歌词盒子还原偏移值
			lyricBoxRef.current.scrollTo({ top: 0 });
		}
	}, [songId]);

	/**
	 * @description: 歌曲时间变化时更新歌词状态
	 */
	useEffect(() => {
		const childrenList = lyricBoxRef.current.querySelectorAll('.lyric-text');
		// 寻找高亮歌词索引值
		const index = lyricList.findIndex((item) => item.time >= currentTime);
		if (index !== -1 && index !== oldIndex) {
			highlightLyric(index);
		}

		// 更新界面显示高亮歌词的函数
		function highlightLyric(index) {
			if (index === 0) return;
			// 清除动画效果
			childrenList.forEach((item) => {
				item.style.animation = 'none';
				item.style.fontWeight = '400';
			});
			// 当前歌词添加动画
			childrenList[index - 1].style.animation = `scan ${lyricList[index - 1].duration}s ease-out`;
			childrenList[index - 1].style.fontWeight = '600';
			// 高亮到第五行歌词开始滚动
			if (index < 5) return;
			lyricBoxRef.current.scrollTo({
				top: 40 * (index - 5), // 每行歌词的高度40px
				behavior: 'smooth',
			});
			setOldIndex(index); // 下一句歌词的参考索引值
		}
	}, [currentTime]);

	// 歌词页面自己维护歌曲当前播放时间(提高实时性)
	useEffect(() => {
		function timeUpdate() {
			setCurrentTime(audio.currentTime);
		}

		audio.addEventListener('timeupdate', timeUpdate);

		return () => {
			audio && audio.removeEventListener('timeupdate', timeUpdate);
		};
	}, [audio]);

	return (
		<LyricStyles>
			<div className='lyric-box' ref={lyricBoxRef}>
				{!!lyricList.length &&
					lyricList.map((item) => {
						return (
							<div className='lyric-line'>
								<div className='lyric-text'>{item.lyric}</div>
							</div>
						);
					})}
			</div>
		</LyricStyles>
	);
};

export default memo(Lyric);
