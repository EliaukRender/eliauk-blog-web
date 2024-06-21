import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles.css'; // 样式文件

/**
 * @description: 动画懒加载组件
 */
const FadeInAnimationComp = (props) => {
	const { ref, inView } = useInView({
		threshold: 0.4, // 设置阈值，当40%以上的元素进入视口时触发
		triggerOnce: true // 动画仅触发一次
	});

	return (
		<div className={`${inView ? 'animate' : ''}`} ref={ref}>
			{inView && props.children}
		</div>
	);
};

import PropTypes from 'prop-types';

FadeInAnimationComp.propTypes = {
	children: PropTypes.element
};

export default memo(FadeInAnimationComp);
