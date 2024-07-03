import MessageToast from '@/components/MessageToast';

/**
 * @description: 基于 响应状态码 处理不同的错误响应
 */
export const handleErrorByCode = (status) => {
	switch (status) {
		case 400:
			MessageToast.error('请求失败！请您稍后重试');
			break;
		case 401:
			MessageToast.error('登录失效！请您重新登录');
			break;
		case 403:
			MessageToast.error('当前账号无权限访问');
			break;
		case 404:
			MessageToast.error('您所访问的资源不存在');
			break;
		case 405:
			MessageToast.error('请求方式错误！请您稍后重试');
			break;
		case 408:
			MessageToast.error('请求超时！请您稍后重试');
			break;
		case 500:
			MessageToast.error('服务异常');

			break;
		case 502:
			MessageToast.error('网关错误');
			break;
		case 503:
			MessageToast.error('服务不可用');
			break;
		case 504:
			MessageToast.error('网关超时');
			break;
		default:
			MessageToast.error('请求失败');
	}
};
