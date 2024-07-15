import React, { memo, useEffect, useRef, useState } from 'react';
import { nianshaoyouwei } from '@/views/musicSection/constant/lyric/年少有为.js';
import { transformLyric } from '@/views/musicSection/utils/transformLyric';
import { LyricStyles } from '@/views/musicSection/components/Lyric/LyricStyles';
import { shallowEqual, useSelector } from 'react-redux';

const lyricList = transformLyric(nianshaoyouwei);

/**
 * @description: 歌词
 */
const Lyric = () => {
	const { currentTime } = useSelector(
		(state) => ({
			currentTime: state.audio.currentTime,
		}),
		shallowEqual,
	);
	const lyricBoxRef = useRef(null);
	const [oldIndex, setOldIndex] = useState();

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
			// 滚动
			if (index < 5) return;
			lyricBoxRef.current.scrollTo({
				top: 30 * (index - 5),
				behavior: 'smooth',
			});
		}
	}, [currentTime]);

	return (
		<LyricStyles>
			<div className='lyric-box' ref={lyricBoxRef}>
				{lyricList.map((item) => {
					return <div className='lyric-line'>{item.lyric}</div>;
				})}
			</div>
		</LyricStyles>
	);
};

export default memo(Lyric);
