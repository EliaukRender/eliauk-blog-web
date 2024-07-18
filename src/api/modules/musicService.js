import http from '@/api/index';

// 获取自建歌单列表
export const querySheetList = () => {
	return http.post('/music/querySheetList');
};

// 获取自建歌单中的歌曲列表
export const querySongListBySheetId = (params) => {
	return http.post('/music/querySongListBySheetId', params);
};

// 获取公共菜单列表
export const queryCommonMenuList = () => {
	return http.post('/music/queryCommonMenuList');
};
