import React, { memo } from 'react';
import { Spin } from 'antd';
import { GlobalLoadingStyles } from '@/components/Loading/GlobalLoadingStyles';

/**
 * @description: 页面加载时的全局Loading效果
 */
const GlobalLoading = () => {
	return (
		<GlobalLoadingStyles>
			<Spin size='large' />
		</GlobalLoadingStyles>
	);
};

export default memo(GlobalLoading);
