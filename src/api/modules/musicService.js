import http from '@/api/index';

// 获取歌曲列表
export const getSongList = (params) => {
	return http.post('/music/getSongList', params);
};

// 获取菜单列表
export const getMenuList = () => {
	return http.post('/music/getMenuList');
};
