import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { FadeInAnimateWrapper } from '@/components/Animation/FadeInViewAnimation/styles'; // 样式文件

/**
 * @description: 动画懒加载组件(元素进入到屏幕视口的时候自动播放动画)
 */
const FadeInAnimationComp = ({ children }) => {
	const { ref, inView } = useInView({
		threshold: 0.4, // 设置阈值，当40%以上的元素进入视口时触发
		triggerOnce: true // 动画仅触发一次
	});

	return (
		<FadeInAnimateWrapper>
			<div className={`${inView ? 'animate' : ''}`} ref={ref}>
				{inView && children}
			</div>
		</FadeInAnimateWrapper>
	);
};

FadeInAnimationComp.propTypes = {
	children: PropTypes.node
};

export default memo(FadeInAnimationComp);
