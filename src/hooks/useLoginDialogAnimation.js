import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @description: 登录、注册弹窗 的动画效果
 */
export const useLoginDialogAnimation = (animateMode) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		// 打开登录 的动画 (定义宽高是为了第一次转注册时宽度也有动画效果)
		if (animateMode === 1) {
			animate(
				'ul',
				{
					width: '950px',
					height: '500px',
					clipPath: 'inset(0% 0% 0% 0% round 10px)'
				},
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut'
				}
			);
		}
		// 注册转登录 的动画
		if (animateMode === 2) {
			animate(
				'ul',
				{ width: '950px', height: '500px' },
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
					width: { duration: 0.5 } // 宽度较大，让速度快一点
				}
			);
		}
		// 打开注册 的动画
		if (animateMode === 3) {
			animate(
				'ul',
				{
					width: '500px',
					height: '600px',
					clipPath: 'inset(0% 0% 0% 0% round 10px)'
				},
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut'
				}
			);
		}
		// 登录转注册 的动画
		if (animateMode === 4) {
			animate(
				'ul',
				{ width: '500px', height: '600px' },
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
					width: { duration: 0.5 }
				}
			);
		}
	}, [animateMode]);

	return scope;
};
