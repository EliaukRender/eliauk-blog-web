import { Navigate } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载
const MusicPlayer = React.lazy(() => import('@/views/musicSection/index.jsx'));
const ProjectSection = React.lazy(() => import('@/views/projectSection/index.jsx'));
const ProfileSection = React.lazy(() => import('@/views/profileSection/index.jsx'));
const MyMusic = React.lazy(() => import('@/views/musicSection/views/RightViews/MyMusic/CommonPage.jsx'));
const OnlineMusic = React.lazy(() => import('@/views/musicSection/views/RightViews/OnlineMusic/CommonPage.jsx'));

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
				path: 'home',
				element: <OnlineMusic></OnlineMusic>,
			},
			// 视频
			{
				path: 'video',
				element: <OnlineMusic></OnlineMusic>,
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
