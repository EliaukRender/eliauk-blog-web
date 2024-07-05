import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { loginRegisterAnimateEnum } from '@/constant';

/**
 * @description: 登录、注册弹窗 的动画效果
 */
export const useLoginRegisterDialogAnimation = (animateMode) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		// 打开登录 的动画 (定义宽高是为了第一次转注册时宽度也有动画效果)
		if (animateMode === loginRegisterAnimateEnum.OPEN_LOGIN) {
			animate(
				'ul',
				{
					width: '950px',
					height: '500px',
					clipPath: 'inset(0% 0% 0% 0% round 10px)',
				},
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
				},
			);
		}
		// 注册转登录 的动画
		if (animateMode === loginRegisterAnimateEnum.REGISTER_TO_LOGIN) {
			animate(
				'ul',
				{ width: '950px', height: '500px' },
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
					width: { duration: 0.5 }, // 宽度较大，让速度快一点
				},
			);
		}
		// 打开注册 的动画
		if (animateMode === loginRegisterAnimateEnum.OPEN_REGISTER) {
			animate(
				'ul',
				{
					width: '550px',
					height: '700px',
					clipPath: 'inset(0% 0% 0% 0% round 10px)',
				},
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
				},
			);
		}
		// 登录转注册 的动画
		if (animateMode === loginRegisterAnimateEnum.LOGIN_TO_REGISTER) {
			animate(
				'ul',
				{ width: '550px', height: '700px' },
				{
					type: 'tween',
					duration: 0.7,
					ease: 'easeInOut',
					width: { duration: 0.5 },
				},
			);
		}
	}, [animateMode]);

	return scope;
};
