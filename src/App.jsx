import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';
import { AppWrapper } from '@/AppStyles';
import { useAppScrollDirection } from '@/hooks/useAppScrollDirection';
import PageProgressIndicator from '@/components/ProgressIndicator';
import TopHomeBar from '@/views/common/TopHomeBar/TopHomeBar';
import MiniPlayer from '@/views/musicSection/views/MiniPlayer/MiniPlayer';

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
			{/* mini-music音乐播放器 */}
			<MiniPlayer></MiniPlayer>
		</AppWrapper>
	);
};

export default memo(App);
