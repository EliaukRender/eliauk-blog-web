import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 页面进入时的位移动画
 */
export const usePageTransformAnimate = () => {
	const [playAnimation, setPlayAnimation] = useState(1);
	const { curSheet } = useSelector(
		(state) => ({
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);

	useEffect(() => {
		setPlayAnimation((pre) => pre + 1);
	}, [curSheet]);

	return { playAnimation };
};
