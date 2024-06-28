import { useRef, memo } from 'react';
import { useInView, motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * @description: 组件进入视图时触发动画
 */
function FadeInViewAnimation({ children, onceFlag = true, duration = 1.2 }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: onceFlag });

	return (
		<motion.div ref={ref} initial={{ y: 40 }} animate={isInView ? { y: 0, transition: { duration: duration, ease: 'easeInOut' } } : {}}>
			{children}
		</motion.div>
	);
}

FadeInViewAnimation.propTypes = {
	children: PropTypes.node, // 子元素
	onceFlag: PropTypes.bool, // 动画是否播放一次
	duration: PropTypes.number // 动画持续时长
};

export default memo(FadeInViewAnimation);
