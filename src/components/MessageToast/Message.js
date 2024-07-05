import { message } from 'antd';

export const useMessage = (type = 'success', content, duration = 3) => {
	const [messageApi, contextHolder] = message.useMessage();
	messageApi.open({
		type,
		content,
		duration,
	});

	// 如果是loading效果的message则3s后自动消失
	if (type === 'loading') {
		setTimeout(() => {
			messageApi.destroy();
		}, duration * 1000);
	}
};
