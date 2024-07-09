import http from '@/api/index';

// 获取歌曲列表
export const getSongList = () => {
	return http.post('/music/getSongList');
};
