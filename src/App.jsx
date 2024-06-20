import React, { memo, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '@/store/modules/globalReducer';
import { setCurSectionId } from '@/store/modules/globalReducer';
import { AppWrapper } from '@/AppStyles';

const App = () => {
	const dispatch = useDispatch();
	let oldScrollY = 0;
	const { scrollY } = useSelector((state) => ({
		scrollY: state.global.scrollY
	}));

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

	/**
	 * @description: 监听ScrollY，更新导航条组件的current sectionId
	 */
	const handleCurSectionIdByScrollY = () => {
		// 页面往下滚动
		if (window.scrollY > oldScrollY) {
			oldScrollY = window.scrollY;
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
			if (window.scrollY % window.innerHeight < 0.1 * window.innerHeight) {
				dispatch(setCurSectionId(Math.floor(window.scrollY / window.innerHeight)));
			}
		}
	};

	return <AppWrapper className='page'>{useRoutes(routes)}</AppWrapper>;
};

export default memo(App);
