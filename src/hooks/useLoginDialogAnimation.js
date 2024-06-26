import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @description: 登录弹窗 的动画效果
 */
export const useLoginDialogAnimation = (flag) => {
	const [scope, animate] = useAnimate();
	console.log('flag', flag);

	useEffect(() => {
		// 登录动画
		if (flag) {
			animate(
				'ul',
				{
					top: '50%',
					clipPath: 'inset(0% 0% 0% 0% round 10px)'
				},
				{
					type: 'spring',
					bounce: 0,
					duration: 1.2
				}
			);
		} else {
			// 注册动画
			animate(
				'ul',
				{ width: '600px', height: '800px' },
				{
					type: 'spring',
					bounce: 0,
					duration: 1.5
				}
			);
		}
	}, [flag]);

	return scope;
};
