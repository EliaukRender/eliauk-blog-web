import { myMusicMenuList, onlineMusicMenuList } from '@/views/musicSection/constant';
import React from 'react';

// 路由懒加载
const MyLike = React.lazy(() => import('../views/RightViews/MyLike'));
const Hot = React.lazy(() => import('../views/RightViews/Hot'));
const Eason = React.lazy(() => import('../views/RightViews/Eason'));
const Lin = React.lazy(() => import('../views/RightViews/Lin'));

// 左侧菜单路由配置
const musicAppRoutes = [...onlineMusicMenuList, ...myMusicMenuList].map((item) => {
	let element;
	switch (item.routerPath) {
		case 'my-like':
			element = <MyLike />;
			break;
		case 'eason':
			element = <Eason />;
			break;
		case 'linyoujia':
			element = <Lin />;
			break;
		case 'hot':
			element = <Hot />;
			break;
		default:
			element = <MyLike />;
	}
	return {
		id: item.id,
		path: item.routerPath,
		element: element,
	};
});

export default musicAppRoutes;
