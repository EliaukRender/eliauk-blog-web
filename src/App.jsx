import React, { memo, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { AppWrapper } from '@/AppStyles';
import { useAppScrollDirection } from '@/hooks/useAppScrollDirection';
import PageProgressIndicator from '@/components/ProgressIndicator';
import { useSelector } from 'react-redux';
import { handleScrollTo } from '@/utils/handleScrollPage';

const App = () => {
	useAppScrollDirection();

	const { currentSectionId } = useSelector((state) => ({
		currentSectionId: state.global.currentSectionId,
	}));

	useEffect(() => {
		handleScrollTo(window.innerHeight * currentSectionId);
	}, []);

	return (
		<AppWrapper className='page'>
			{/* 页面进度指示器 */}
			<PageProgressIndicator></PageProgressIndicator>
			{/* 路由 */}
			{useRoutes(routes)}
		</AppWrapper>
	);
};

export default memo(App);
