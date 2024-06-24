/**
 * @description: 该动画组件实现Y轴方向的translate移动效果，动画参数可以自定义
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// 动画组件
const MoveAnimation = (props) => {
	const {
		start = '30px', // translateY开始的位置
		end = '0', // translateY结束的位置
		duration = '1s', // 动画持续时长
		iterationCount = '1', // 动画循环次数
		animationDelay = '0s', // 动画延迟开始
		timingFunction = 'ease-out', // 动画速度曲线
		translateX_Y = 'translateY', // x轴或y轴方向移动，默认是y轴
		children
	} = props;

	// 创建动画
	const createAnimation = (start, end) => keyframes`
    0% {
      transform: ${translateX_Y}(${start});
    }
    100% {
      transform: ${translateX_Y}(${end});
    }
  `;

	// 创建动画组件
	const AnimatedDiv = styled.div`
		animation: ${createAnimation(start, end)} ${duration} ${timingFunction} ${animationDelay} ${iterationCount};
	`;

	return <AnimatedDiv>{children}</AnimatedDiv>;
};

MoveAnimation.propTypes = {
	start: PropTypes.string,
	end: PropTypes.string,
	duration: PropTypes.string,
	iterationCount: PropTypes.string,
	timingFunction: PropTypes.string,
	children: PropTypes.node,
	translateX_Y: PropTypes.string,
	animationDelay: PropTypes.string
};

export default memo(MoveAnimation);
