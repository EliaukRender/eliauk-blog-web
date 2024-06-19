import { Navigate } from 'react-router-dom';
import React from 'react';

// 路由懒加载
const Home = React.lazy(() => import('@/views/home/index'));

// 路由配置
const routes = [
	{
		path: '/',
		element: <Navigate to={'/home'}></Navigate>
	},
	{
		path: '/home',
		element: <Home></Home>
	}
];

export default routes;
