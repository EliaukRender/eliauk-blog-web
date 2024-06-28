import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @description: 登录、注册弹窗 的动画效果
 */
export const useLoginDialogAnimation = (changedValue) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (!changedValue) return;
		console.log('动画');
		animate(
			'ul',
			{
				y: 0
			},
			{
				duration: 1.5,
				ease: 'easeInOut'
			}
		);
	}, [changedValue]);

	return scope;
};
