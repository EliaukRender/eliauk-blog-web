import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { AppWrapper } from '@/AppStyles';
import { useAppScrollDirection } from '@/hooks/useAppScrollDirection';
import PageProgressIndicator from '@/components/ProgressIndicator';
import TopHomeBar from '@/views/common/TopHomeBar/TopHomeBar';

const App = () => {
	useAppScrollDirection();

	return (
		<AppWrapper className='page'>
			{/* 页面进度指示器 */}
			<PageProgressIndicator></PageProgressIndicator>
			{/* 菜单栏 */}
			<TopHomeBar></TopHomeBar>
			{/* 路由 */}
			{useRoutes(routes)}
		</AppWrapper>
	);
};

export default memo(App);
