import { useEffect } from 'react';
import { setScrollDirection, setScrollY } from '@/store/modules/globalReducer';
import { useDispatch } from 'react-redux';
import throttle from 'lodash/throttle';

/**
 * @description: 监听网页Y轴滚动的方向
 */
export const useAppScrollDirection = () => {
	const dispatch = useDispatch();
	let oldScrollY = 0;

	/**
	 * @description: 监听网页滚动的方向
	 */
	const watchScrollDirection = () => {
		// 页面往下滚动
		if (window.scrollY > oldScrollY) {
			oldScrollY = window.scrollY;

			dispatch(setScrollDirection('down'));
		}
		// 页面往上滚动
		if (window.scrollY < oldScrollY) {
			oldScrollY = window.scrollY;
			setTimeout(() => {
				dispatch(setScrollDirection('up'));
			}, 100);
		}
		dispatch(setScrollY(window.scrollY));
	};

	useEffect(() => {
		const throttledScrollHandler = throttle(watchScrollDirection, 300); // 节流
		window.addEventListener('scroll', throttledScrollHandler, true);

		return () => {
			window.removeEventListener('scroll', throttledScrollHandler);
		};
	}, [dispatch]);
};
