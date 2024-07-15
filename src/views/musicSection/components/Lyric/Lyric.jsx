import React, { memo, useEffect, useRef, useState } from 'react';
import { transformLyric } from '@/views/musicSection/utils/transformLyric';
import { LyricStyles } from '@/views/musicSection/components/Lyric/LyricStyles';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 歌词
 */
const Lyric = () => {
	const { currentTime, songId, songList } = useSelector(
		(state) => ({
			currentTime: state.audio.currentTime,
			songId: state.audio.songId,
			songList: state.audio.songList,
		}),
		shallowEqual,
	);
	const lyricBoxRef = useRef(null);
	const [oldIndex, setOldIndex] = useState(0);
	const [lyricList, setLyricList] = useState([]);

	/**
	 * @description: 歌曲切换时更新歌词
	 */
	useEffect(() => {
		const currentSong = songList.find((song) => song.songId === songId);
		if (!!currentSong) {
			setLyricList(transformLyric(currentSong.lyric));
			setOldIndex(0); // 重置索引值
			// 清除所有高亮
			const childrenList = lyricBoxRef.current.querySelectorAll('div');
			childrenList.forEach((item) => {
				item.classList.remove('highlight');
			});
			// 歌词盒子还原偏移值
			lyricBoxRef.current.scrollTo({ top: 0 });
		}
	}, [songId]);

	/**
	 * @description: 歌曲时间变化时更新歌词状态
	 */
	useEffect(() => {
		const childrenList = lyricBoxRef.current.querySelectorAll('div');
		// 寻找高亮歌词索引值
		const index = lyricList.findIndex((item) => item.time >= currentTime);
		if (index !== -1 && index !== oldIndex) {
			highlightLyric(index);
			setOldIndex(index);
		}

		// 更新界面显示高亮歌词的函数
		function highlightLyric(index) {
			if (index === 0) return;
			// 清除所有高亮
			childrenList.forEach((item) => {
				item.classList.remove('highlight');
			});
			// 高亮当前歌词
			childrenList[index - 1]?.classList.add('highlight');
			// 滚动 (高亮到第五行歌词开始滚动)
			if (index < 5) return;
			lyricBoxRef.current.scrollTo({
				top: 40 * (index - 5), // 40是每行歌词的高度
				behavior: 'smooth',
			});
		}
	}, [currentTime, songId]);

	return (
		<LyricStyles>
			<div className='lyric-box' ref={lyricBoxRef}>
				{!!lyricList.length &&
					lyricList.map((item) => {
						return <div className='lyric-line'>{item.lyric}</div>;
					})}
			</div>
		</LyricStyles>
	);
};

export default memo(Lyric);
