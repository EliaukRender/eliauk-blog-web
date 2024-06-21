import React, { memo } from 'react';
import { Spin } from 'antd';
import { GlobalLoadingWrapper } from '@/components/Loading/styles';

/**
 * @description: 页面加载时的全局Loading效果
 */
const GlobalLoading = () => {
	return (
		<GlobalLoadingWrapper>
			<Spin size='large' />
		</GlobalLoadingWrapper>
	);
};

export default memo(GlobalLoading);
