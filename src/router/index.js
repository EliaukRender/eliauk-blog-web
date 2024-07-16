import { Navigate } from 'react-router-dom';
import React from 'react';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载
const MusicPlayer = React.lazy(() => import('@/views/musicSection/index.jsx'));
const ProjectSection = React.lazy(() => import('@/views/projectSection/index.jsx'));
const ProfileSection = React.lazy(() => import('@/views/profileSection/index.jsx'));
const MyLike = React.lazy(() => import('@/views/musicSection/views/RightViews/MyLike.jsx'));

// 路由配置
const routes = [
	{
		path: '/',
		element: <Navigate to={'/home'}></Navigate>,
	},
	{
		path: '/home',
		element: <Home></Home>,
	},
	{
		path: '/music/*',
		element: <MusicPlayer></MusicPlayer>,
		children: [
			{
				path: 'like',
				element: <MyLike></MyLike>,
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
