import { useEffect } from 'react';
import { setScrollDirection } from '@/store/modules/globalReducer';
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
			setTimeout(() => {
				dispatch(setScrollDirection('down'));
			}, 200);
		}
		// 页面往上滚动
		if (window.scrollY < oldScrollY) {
			oldScrollY = window.scrollY;
			setTimeout(() => {
				dispatch(setScrollDirection('up'));
			}, 200);
		}
	};

	useEffect(() => {
		function handleScroll() {
			watchScrollDirection();
		}

		const throttledScrollHandler = throttle(handleScroll, 50); // 节流
		window.addEventListener('scroll', throttledScrollHandler, true);

		return () => {
			window.removeEventListener('scroll', throttledScrollHandler);
		};
	}, [dispatch]);
};
