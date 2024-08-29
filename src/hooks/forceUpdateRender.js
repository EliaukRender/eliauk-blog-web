import { useState } from 'react';

/**
 * @description: 强制刷新页面内容
 */
export const forceUpdateRender = () => {
	const [key, setKey] = useState(0);

	const reRender = () => {
		setKey((prevKey) => prevKey + 1);
	};

	return {
		key,
		reRender,
	};
};
