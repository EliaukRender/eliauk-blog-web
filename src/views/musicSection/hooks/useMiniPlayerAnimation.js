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
	const [open, setOpen] = useState(false); // 是否打开播放列表
	const controls = useAnimationControls(); // 动画控制实例

	/* 初始化边界bounds */
	useEffect(() => {
		if (playerRef.current) {
			const { width, height, left, right, bottom, top } = playerRef.current?.getBoundingClientRect();
			console.log(width, height, left, right, bottom, top);
			/* 元素自身就是上下左右四个方位的原点 */
			setBounds({
				left: -left,
				right: window.innerWidth - right,
				top: -window.innerHeight + height,
				bottom: 0,
			});
		}
	}, []);

	/* 基于open值播放动画 */
	useEffect(() => {
		// 打开歌曲列表
		if (open) {
			const { bottom } = playerRef.current?.getBoundingClientRect();
			const bottomDistance = window.innerHeight - bottom;
			// 朝上移动展开
			if (bottomDistance < SONG_LIST_HEIGHT) {
				controls.start('moveUpExpand');
			} else {
				// 朝下移动展开
				controls.start('moveDownExpand');
			}
			controls.start('showList');
			/* 更新边界值 */
			console.log('gengxinbianjiezhi ', bounds);
			setBounds((bounds) => ({
				...bounds,
				bottom: SONG_LIST_HEIGHT,
			}));
			console.log(bounds);
		} else {
			const { bottom } = playerRef.current?.getBoundingClientRect();
			const bottomDistance = window.innerHeight - bottom;
			// 朝上移动折叠
			if (bottomDistance > SONG_LIST_HEIGHT) {
				controls.start('upFold');
			} else {
				// 朝下移动折叠
				controls.start('downFold');
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
		SONG_LIST_HEIGHT,
		maskVariants,
		showSongListVariants,
		positionHeightVariants,
	};
};
