import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @description: 登录注册popover的动画效果
 */
export const useLoginOptionsAnimation = (isOpen) => {
	const [scope, animate] = useAnimate();
	const staggerMenuItems = stagger(0.1, { startDelay: 0.1 }); // 延迟时间

	useEffect(() => {
		// scope是播放动画的元素的父级元素
		// animate()绑定到scope绑定的元素下面所有为ul和li的子元素身上
		animate(
			'ul',
			{
				clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)'
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5
			}
		);
		animate('div', isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.3, filter: 'blur(20px)' }, {
			duration: 0.2,
			delay: isOpen ? staggerMenuItems : 0
		});
	}, [isOpen]);

	return scope;
};
