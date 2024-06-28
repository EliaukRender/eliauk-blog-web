import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const useProfileAnimation = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
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
	}, []);
	return scope;
};
