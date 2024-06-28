import { shallowEqual, useSelector } from 'react-redux';
import { useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

export const useTopBarAnimation = () => {
	const { scrollDirection } = useSelector(
		(state) => ({
			scrollDirection: state.global.scrollDirection
		}),
		shallowEqual
	);

	const controls = useAnimationControls();
	const variants = {
		showBar: {
			opacity: 1,
			translateY: 0,
			transition: {
				duration: 0.8,
				ease: 'easeInOut'
			}
		},
		hiddenBar: {
			opacity: 0,
			translateY: -80,
			transition: {
				duration: 0.8,
				ease: 'easeInOut'
			}
		}
	};

	useEffect(() => {
		// 页面刚渲染时
		if (!scrollDirection) {
			controls.start('showBar');
			return;
		}
		// 隐藏Bar
		if (scrollDirection === 'down') {
			controls.start('hiddenBar');
		}
		// 显示Bar
		if (scrollDirection === 'up') {
			controls.start('showBar');
		}
	}, [scrollDirection]);

	return {
		variants,
		controls
	};
};
