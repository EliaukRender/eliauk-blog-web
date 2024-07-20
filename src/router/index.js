import { Navigate } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载
const MusicPlayer = React.lazy(() => import('@/views/musicSection/index.jsx'));
const ProjectSection = React.lazy(() => import('@/views/projectSection/index.jsx'));
const ProfileSection = React.lazy(() => import('@/views/profileSection/index.jsx'));
const MyMusic = React.lazy(() => import('@/views/musicSection/views/RightViews/MySheet/SheetCommonPage.jsx'));
const OnlineCommonPage = React.lazy(() => import('@/views/musicSection/views/RightViews/OnlineMusic/OnlineCommonPage.jsx'));
const VideoRecommend = React.lazy(() => import('@/views/musicSection/views/RightViews/OnlineMusic/views/VideoRecommend.jsx'));
const MusicRecommend = React.lazy(() => import('@/views/musicSection/views/RightViews/OnlineMusic/views/MusicRecommend.jsx'));

// 路由配置
const routes = [
	{
		path: '/',
		element: <Navigate to={'/index'}></Navigate>,
	},
	{
		path: '/index',
		element: <Home></Home>,
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
	{
		path: '/project',
		element: <ProjectSection></ProjectSection>,
	},
	{
		path: '/personal',
		element: <ProfileSection></ProfileSection>,
	},
];

export default routes;
