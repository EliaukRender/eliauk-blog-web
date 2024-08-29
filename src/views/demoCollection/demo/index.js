/**
 * @description: 导出所有的demo组件
 */
const requireComponent = require.context('./', true, /\/index\.jsx$/);
const components = requireComponent.keys().reduce((acc, fileName) => {
	const componentName = fileName.split('/').slice(-2, -1)[0];
	const componentConfig = requireComponent(fileName);
	acc[componentName] = componentConfig.default;
	return acc;
}, {});

export default components; // 组件对象，包含所有demo组件
