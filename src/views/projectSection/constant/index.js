// 文字描述表格的文本配置
const EliaukManage_descriptionItems = [
	{
		key: '1',
		label: '概述',
		span: 3,
		children:
			'该系统的应用场景是后台管理业务，使用当下较热门的前端技术栈组合vue3+ts+pinia+vite+elementUI，封装了部分常用的组件、指令、axios网络请求。'
	},
	{
		key: '2',
		label: '组件',
		span: 3,
		children: 'Table、Dialog、Drawer、Loading'
	},
	{
		key: '3',
		label: '指令',
		span: 3,
		children: '复制、防抖节流、拖动、水印'
	},
	{
		key: '4',
		label: '其他',
		span: 3,
		children: '完善建设中...'
	}
];

// 技术栈列表
const EliaukManage_technologyStack = [
	{ name: 'vue', url: 'https://cn.vuejs.org' },
	{ name: 'vite', url: 'https://cn.vitejs.dev' },
	{ name: 'typescript', url: 'https://www.tslang.cn/index.html' },
	{ name: 'pinia', url: 'https://pinia.web3doc.top/introduction.html' },
	{ name: 'element', url: 'https://element-plus.org/zh-CN/#/zh-CN' },
	{ name: 'nodejs', url: 'https://nodejs.org/zh-cn' },
	{ name: 'koa', url: 'https://koajs.docschina.org' },
	{ name: 'mysql', url: 'https://www.mysql.com' }
];

// 文字描述表格的文本配置
const EliaukBlog_descriptionItems = [
	{
		key: '1',
		label: '概述',
		span: 3,
		children:
			'该系统是个人博客系统（本系统），使用的技术栈主要是react与koa。页面均通过函数式组件实现，通过redux进行全局状态管理，引入framer-motion动画库实现动画效果。'
	},
	{
		key: '2',
		label: '组件',
		span: 3,
		children: '动画、进度指示器、Loading、Modal'
	},
	{
		key: '3',
		label: 'hooks',
		span: 3,
		children: '网页滚动（全局与元素）'
	},
	{
		key: '4',
		label: '其他',
		span: 3,
		children: '完善建设中...'
	}
];

// 技术栈列表
const EliaukBlog_technologyStack = [
	{ name: 'react', url: 'https://zh-hans.react.dev' },
	{ name: 'redux', url: 'https://www.redux.org.cn' },
	{ name: 'framer', url: 'https://www.framer.com/motion/' },
	{ name: 'antd', url: 'https://ant.design/components/overview-cn' },
	{ name: 'nodejs', url: 'https://nodejs.org/zh-cn' },
	{ name: 'koa', url: 'https://koajs.docschina.org' },
	{ name: 'mysql', url: 'https://www.mysql.com' }
];

/**
 * @description: 项目文字介绍信息
 */
export const projectInfo = {
	EliaukManage: { descriptionItems: EliaukManage_descriptionItems, technologyStack: EliaukManage_technologyStack },
	EliaukBlog: { descriptionItems: EliaukBlog_descriptionItems, technologyStack: EliaukBlog_technologyStack },
	EliaukMusic: { descriptionItems: EliaukBlog_descriptionItems, technologyStack: EliaukBlog_technologyStack }
};
