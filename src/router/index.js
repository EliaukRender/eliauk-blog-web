import { Navigate } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载
const MusicPlayer = React.lazy(() => import('@/views/eliaukMusic'));
const EliaukManage = React.lazy(() => import('@/views/eliaukManage/index.jsx'));
const MyMusic = React.lazy(() => import('@/views/eliaukMusic/views/RightViews/MySheet/SheetCommonPage.jsx'));
const OnlineCommonPage = React.lazy(
	() => import('@/views/eliaukMusic/views/RightViews/OnlineMusic/OnlineCommonPage.jsx'),
);
const VideoRecommend = React.lazy(
	() => import('@/views/eliaukMusic/views/RightViews/OnlineMusic/views/VideoRecommend.jsx'),
);
const MusicRecommend = React.lazy(
	() => import('@/views/eliaukMusic/views/RightViews/OnlineMusic/views/MusicRecommend.jsx'),
);
const DemoCollection = React.lazy(() => import('@/views/demoCollection/index'));

// 路由配置
const routes = [
	{
		path: '/',
		element: <Navigate to={'/index.jsx'}></Navigate>,
	},
	{
		path: '/index.jsx',
		element: <Home></Home>,
	},
	{
		path: '/eliauk-manage',
		element: <EliaukManage></EliaukManage>,
	},
	{
		path: '/demo-collection',
		element: <DemoCollection></DemoCollection>,
	},
	{
		path: '/music/*',
		element: <MusicPlayer></MusicPlayer>,
		children: [
			// 喜欢
			{
				path: 'like',
				element: <MyMusic></MyMusic>,
			},
			{
				path: 'sleep',
				element: <MyMusic></MyMusic>,
			},
			{
				path: 'sport',
				element: <MyMusic></MyMusic>,
			},
			{
				path: 'hot',
				element: <MyMusic></MyMusic>,
			},
			// 音乐馆
			{
				path: 'home/*',
				element: <OnlineCommonPage></OnlineCommonPage>,
				children: [
					{
						path: 'musicRecommend',
						element: <MusicRecommend></MusicRecommend>,
					},
				],
			},
			// 视频
			{
				path: 'video/*',
				element: <OnlineCommonPage></OnlineCommonPage>,
				children: [
					{
						path: 'videoRecommend',
						element: <VideoRecommend></VideoRecommend>,
					},
				],
			},
		],
	},
];

export default routes;
