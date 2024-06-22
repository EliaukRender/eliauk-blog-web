import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { AppWrapper } from '@/AppStyles';
import useAppScrollY from '@/hooks/useAppScrollY';
import PageProgressIndicator from '@/components/ProgressIndicator';

const App = () => {
	useAppScrollY(); // 监听网页的scrollY滚动事件

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
