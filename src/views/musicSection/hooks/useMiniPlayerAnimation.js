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
				setBounds((prePosition) => ({ ...prePosition, top: prePosition.top + SONG_LIST_HEIGHT })); // 更新边界值
			} else {
				// 朝下移动展开
				controls.start('moveDownExpand');
				setBounds((prePosition) => ({ ...prePosition, bottom: prePosition.bottom - SONG_LIST_HEIGHT })); // 更新边界值
			}
			controls.start('showList');
		} else {
			// 关闭歌曲列表
			const { bottom } = playerRef.current?.getBoundingClientRect();
			const bottomDistance = window.innerHeight - bottom;
			// 朝上移动折叠
			if (bottomDistance >= SONG_LIST_HEIGHT) {
				controls.start('upFold');
				setBounds((prePosition) => ({ ...prePosition, bottom: prePosition.bottom + SONG_LIST_HEIGHT })); // 更新边界值
			} else {
				// 朝下移动折叠
				controls.start('downFold');
				setBounds((prePosition) => ({ ...prePosition, top: prePosition.top - SONG_LIST_HEIGHT })); // 更新边界值
			}
			controls.start('hiddenList');
		}
	}, [open]);

	/**
	 * @description: 停止拖拽时，判断是否需要隐藏浮窗
	 */
	const minDistance = 20; // 距离边界的最小距离值
	const OUTER = 10; // 悬停隐藏时外露部分的距离值
	let distanceFromLeft = 0; // 距离左边界的值
	let distanceFromRight = 0;
	let distanceFromTop = 0;
	let distanceFromBottom = 0;
	const [position, setPosition] = useState({ x: 0, y: 0 }); // transform的x与y值
	const [tempPosition, setTempPosition] = useState(null);
	const [direction, setDirection] = useState(''); // 记录悬停的边界方位（字符串不为空表示悬停隐藏了）
	const [mouseEnter, setMouseEnter] = useState(false); // 鼠标是否在播放器内
	/**
	 * @description:停止拖拽事件
	 */
	const stopDrag = (e, ui) => {
		e.stopPropagation();
		e.preventDefault();
		let { x, y } = ui; // transform的translateX、translateY值
		setPosition({ x, y }); // 先悬停在拖拽结束的位置
		const { left, right, top, bottom } = playerRef.current?.getBoundingClientRect();
		distanceFromLeft = left;
		distanceFromRight = window.innerWidth - right;
		distanceFromTop = top;
		distanceFromBottom = window.innerHeight - bottom;
		// 分别判断距离哪个边界的距离 小于 最小距离
		if (distanceFromLeft <= minDistance) {
			x = x - distanceFromLeft - INITIAL_WIDTH + OUTER; // 继续左移，OUTER===10是为了隐藏的时候露出来一点
			updatePosition({ x, y });
			setDirection('left');
			return;
		}
		if (distanceFromRight <= minDistance) {
			x = x + distanceFromRight + INITIAL_WIDTH - OUTER; // 继续右移
			setTempPosition({ x, y });
			setDirection('right');
			return;
		}
		if (distanceFromTop <= minDistance) {
			y = y - distanceFromTop - INITIAL_HEIGHT + OUTER; // 继续上移
			setTempPosition({ x, y });
			setDirection('top');
			return;
		}
		if (distanceFromBottom <= minDistance) {
			y = y + distanceFromBottom + INITIAL_HEIGHT - OUTER; // 继续下移
			setTempPosition({ x, y });
			setDirection('bottom');
			return;
		}
		setDirection(''); // 重置方位标记
	};

	/**
	 * @description: 更新位置
	 */
	const updatePosition = (position) => {
		// 鼠标还在播放器内部，不隐藏，暂存x值
		if (mouseEnter) {
			setTempPosition(position);
		}
	};

	// 鼠标进入时
	const onMouseEnter = () => {
		setMouseEnter(true);
		if (!direction) return;
		if (direction === 'left') {
			setPosition((prePosition) => ({ x: prePosition.x + (INITIAL_WIDTH - OUTER), y: prePosition.y }));
		}
		if (direction === 'right') {
			setPosition((prePosition) => ({ x: prePosition.x - (INITIAL_WIDTH - OUTER), y: prePosition.y }));
		}
		if (direction === 'top') {
			setPosition((prePosition) => ({ x: prePosition.x, y: prePosition.y + (INITIAL_HEIGHT - OUTER) }));
		}
		if (direction === 'bottom') {
			setPosition((prePosition) => ({ x: prePosition.x, y: prePosition.y - (INITIAL_HEIGHT - OUTER) }));
		}
	};

	// 鼠标离开时
	const onMouseLeave = () => {
		setMouseEnter(false);
		// 是否隐藏动作还未执行
		if (tempPosition !== null) {
			setPosition(tempPosition); // 更新位置
			setTempPosition(null);
			return;
		}
		if (!direction) return;
		if (direction === 'left') {
			setPosition((prePosition) => ({ x: prePosition.x - (INITIAL_WIDTH - OUTER), y: prePosition.y }));
		}
		if (direction === 'right') {
			setPosition((prePosition) => ({ x: prePosition.x + (INITIAL_WIDTH - OUTER), y: prePosition.y }));
		}
		if (direction === 'top') {
			setPosition((prePosition) => ({ x: prePosition.x, y: prePosition.y - (INITIAL_HEIGHT - OUTER) }));
		}
		if (direction === 'bottom') {
			setPosition((prePosition) => ({ x: prePosition.x, y: prePosition.y + (INITIAL_HEIGHT - OUTER) }));
		}
	};

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
		position,
		stopDrag,
		onMouseEnter,
		onMouseLeave,
	};
};
