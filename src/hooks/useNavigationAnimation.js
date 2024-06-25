import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @description: 导航条显示与隐藏时的动画效果
 */
export const useNavigationAnimation = (currentSectionId) => {
	const [scope, animate] = useAnimate();
	const staggerMenuItems = stagger(0.15, { startDelay: 0.1 }); // 延迟时间

	useEffect(() => {
		animate('div', currentSectionId === 0 ? { opacity: 0, x: 95 } : { opacity: 1, x: -95 }, { duration: 0.2, delay: staggerMenuItems });
	});

	return scope;
};
