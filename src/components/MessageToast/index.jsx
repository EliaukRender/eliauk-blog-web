import { message } from 'antd';

// 自定义配置项
const defaultDuration = 2; // 持续时长
const defaultTop = 100; // 距离顶部距离
const defaultMaxCount = 1; // 最大显示条数

message.config({
	top: defaultTop,
	duration: defaultDuration,
	maxCount: defaultMaxCount,
});

/**
 * @description: 全局Toast消息提示
 */
const MessageToast = {
	success: (content) => {
		message.success(content);
	},
	error: (content) => {
		message.error(content);
	},
	info: (content) => {
		message.info(content);
	},
	warning: (content) => {
		message.warning(content);
	},
	loading: (content) => {
		message.loading(content);
	},
};

export default MessageToast;
