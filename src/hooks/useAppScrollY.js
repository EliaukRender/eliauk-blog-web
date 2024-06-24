import { useEffect } from 'react';
import { setCurSectionId, setScrollDirection, setScrollY } from '@/store/modules/globalReducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

/**
 * @description: useAppScroll的作用
 *          1、监听网页滚动，保存更新scrollY值
 *          2、更新定位导航组件的定位信息
 *          3、刷新页面时恢复页面的scrollY值
 */
const useAppScrollY = () => {
	const dispatch = useDispatch();
	let oldScrollY = 0;
	const { scrollY } = useSelector(
		(state) => ({
			scrollY: state.global.scrollY
		}),
		shallowEqual
	);

	/**
	 * @description: 监听ScrollY，更新导航条组件的current sectionId
	 */
	const handleCurSectionIdByScrollY = () => {
		// 页面往下滚动
		if (window.scrollY > oldScrollY) {
			oldScrollY = window.scrollY;
			dispatch(setScrollDirection('down'));
			if (window.scrollY % window.innerHeight > 0.9 * window.innerHeight) {
				dispatch(setCurSectionId(Math.ceil(window.scrollY / window.innerHeight)));
			}
			// 回到起始位置
			if (window.scrollY / window.innerHeight === 0 && window.scrollY % window.innerHeight === 0) {
				dispatch(setCurSectionId(0));
			}
		}
		// 页面往上滚动
		if (window.scrollY < oldScrollY) {
			oldScrollY = window.scrollY;
			dispatch(setScrollDirection('up'));
			if (window.scrollY % window.innerHeight < 0.1 * window.innerHeight) {
				dispatch(setCurSectionId(Math.floor(window.scrollY / window.innerHeight)));
			}
		}
	};

	useEffect(() => {
		/**
		 * @description: 页面刷新时恢复页面的scrollY值
		 */
		window.scrollTo({ top: scrollY });

		/**
		 * @description: 监听网页的滚动scroll事件
		 */
		function handleScroll() {
			dispatch(setScrollY(window.scrollY)); // 保存scrollY值到redux
			handleCurSectionIdByScrollY(); // 更新curSectionId值
		}

		window.addEventListener('scroll', handleScroll, true);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [dispatch]);
};

export default useAppScrollY;
