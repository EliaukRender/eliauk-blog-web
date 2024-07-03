import http from '@/api/index';

// 用户注册
export const register = (params) => {
	return http.post('/user/register', params);
};

// 用户登录
export const login = (params) => {
	return http.post('/login', params);
};
