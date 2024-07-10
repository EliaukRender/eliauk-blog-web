import { Navigate } from 'react-router-dom';
import React from 'react';
import musicAppRoutes from '@/views/musicSection/router';

const Home = React.lazy(() => import('@/views/home/index')); // 路由懒加载

// 路由配置
const routes = [
	{
		path: '/',
		element: <Navigate to={'/home'}></Navigate>,
	},
	{
		path: '/home/*',
		element: <Home></Home>,
		children: [...musicAppRoutes],
	},
];

export default routes;
