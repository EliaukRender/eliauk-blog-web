// 菜单列表
export const menuList = [
	{ id: 1, name: '首页', path: '/index' },
	{ id: 2, name: '音乐角', path: '/music' },
	{ id: 3, name: '管理系统', path: '/eliauk-manage' },
];

// 性别选项
export const genderOptions = [
	{ label: '女', value: 0 },
	{ label: '男', value: 1 },
];

// 职业方向
export const occupationOptions = [
	{ label: '后端开发', value: 0 },
	{ label: '前端开发', value: 1 },
	{ label: '全栈开发', value: 2 },
	{ label: '学生', value: 3 },
	{ label: '其他工作', value: 4 },
];

// 注册登录弹窗动画
export const loginRegisterAnimateEnum = {
	OPEN_LOGIN: 1, // 打开登录弹窗
	REGISTER_TO_LOGIN: 2, // 注册转登录
	OPEN_REGISTER: 3, // 打开注册
	LOGIN_TO_REGISTER: 4, // 登录转注册
};
