import { useEffect, useRef, useState } from 'react';
import { useAnimationControls } from 'framer-motion';

const INITIAL_WIDTH = 330; // 播放器卡片的宽度
const SONG_LIST_HEIGHT = 200; // 歌曲列表的高度
const INITIAL_HEIGHT = 70; // 播放器不展开歌曲列表时的卡片高度

// 遮罩层显示、隐藏的动画
const maskVariants = {
	showMask: { opacity: 1, transition: { duration: 0.3, ease: 'linear' } },
	hiddenMask: { opacity: 0, transition: { duration: 0.3, ease: 'linear' } },
};

// 歌曲列表展示、隐藏的动画
const showSongListVariants = {
	/* 歌曲列表高度200px */
	showList: { opacity: 1, height: SONG_LIST_HEIGHT, transition: { duration: 0.3, ease: 'linear' } },
	hiddenList: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'linear' } },
};

// 播放器的定位、高度动画
const positionHeightVariants = {
	// 朝上移动展开
	moveUpExpand: {
		top: window.innerHeight - INITIAL_HEIGHT - SONG_LIST_HEIGHT,
		height: INITIAL_HEIGHT + SONG_LIST_HEIGHT,
		transition: { duration: 0.3, ease: 'linear' },
	},
	// 朝下移动展开（fixed的top值不变）
	moveDownExpand: {
		height: INITIAL_HEIGHT + SONG_LIST_HEIGHT,
		transition: { duration: 0.3, ease: 'linear' },
	},
	// 朝下移动折叠
	downFold: {
		top: window.innerHeight - INITIAL_HEIGHT,
		height: INITIAL_HEIGHT,
		transition: { duration: 0.3, ease: 'linear' },
	},
	// 朝上移动折叠
	upFold: {
		height: INITIAL_HEIGHT,
		transition: { duration: 0.3, ease: 'linear' },
	},
};

/**
 * @description: mini播放器的动画
 */
export const useMiniPlayerAnimation = () => {
	const playerRef = useRef(); // 播放器实例
	const [bounds, setBounds] = useState({}); // 拖拽边界
	const [open, setOpen] = useState(null); // 是否打开播放列表
	const controls = useAnimationControls(); // 动画控制实例

	// 初始化边界bounds */
	useEffect(() => {
		if (playerRef.current) {
			const { height, bottom, left, right } = playerRef.current?.getBoundingClientRect();
			/* 元素自身就是上下左右四个方位的原点 */
			setBounds({
				left: -left,
				right: window.innerWidth - right,
				top: -window.innerHeight + height,
				bottom: window.innerHeight - bottom,
			});
		}
	}, []);

	/* 基于open值播放动画 */
	useEffect(() => {
		if (open === null) return;
		// 打开歌曲列表
		if (open) {
			const { bottom } = playerRef.current?.getBoundingClientRect();
			const bottomDistance = window.innerHeight - bottom;
			// 朝上移动展开
			if (bottomDistance <= SONG_LIST_HEIGHT) {
				controls.start('moveUpExpand');
				setBounds((prevState) => ({ ...prevState, top: prevState.top + SONG_LIST_HEIGHT })); // 更新边界值
			} else {
				// 朝下移动展开
				controls.start('moveDownExpand');
				setBounds((prevState) => ({ ...prevState, bottom: prevState.bottom - SONG_LIST_HEIGHT })); // 更新边界值
			}
			controls.start('showList');
		} else {
			// 关闭歌曲列表
			const { bottom } = playerRef.current?.getBoundingClientRect();
			const bottomDistance = window.innerHeight - bottom;
			// 朝上移动折叠
			if (bottomDistance >= SONG_LIST_HEIGHT) {
				controls.start('upFold');
				setBounds((prevState) => ({ ...prevState, bottom: prevState.bottom + SONG_LIST_HEIGHT })); // 更新边界值
			} else {
				// 朝下移动折叠
				controls.start('downFold');
				setBounds((prevState) => ({ ...prevState, top: prevState.top - SONG_LIST_HEIGHT })); // 更新边界值
			}
			controls.start('hiddenList');
		}
	}, [open]);

	return {
		playerRef,
		bounds,
		setOpen,
		open,
		controls,
		INITIAL_WIDTH,
		INITIAL_HEIGHT,
		maskVariants,
		showSongListVariants,
		positionHeightVariants,
	};
};
