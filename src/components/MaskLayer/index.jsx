import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MaskLayerStyles } from '@/components/MaskLayer/styles';

/**
 * @description: 遮罩层组件
 *               showMask: 遮罩层显示与隐藏
 */
const MaskLayer = ({ showMask, children }) => {
	useEffect(() => {
		// Modal出现的时候禁止鼠标滚动
		const preventWheel = (e) => {
			if (showMask) {
				e.preventDefault();
			}
		};
		window.addEventListener('wheel', preventWheel, { passive: false }); // 监听

		return () => {
			window.removeEventListener('wheel', preventWheel); // 释放
		};
	}, [showMask]);

	return <MaskLayerStyles>{children}</MaskLayerStyles>;
};

MaskLayer.propTypes = {
	showMask: PropTypes.bool,
	children: PropTypes.node
};

export default memo(MaskLayer);
