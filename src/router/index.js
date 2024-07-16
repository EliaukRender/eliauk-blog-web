import { Navigate } from 'react-router-dom';
import React from 'react';
import musicAppRoutes from '@/views/musicSection/router';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载
const MusicPlayer = React.lazy(() => import('@/views/musicSection/index.jsx'));
const ProjectSection = React.lazy(() => import('@/views/projectSection/index.jsx'));
const ProfileSection = React.lazy(() => import('@/views/profileSection/index.jsx'));

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
		children: [...musicAppRoutes],
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
