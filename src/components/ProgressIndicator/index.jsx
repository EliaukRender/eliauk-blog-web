import { useScroll, motion } from 'framer-motion';
import React from 'react';
import { PageProgressIndicatorWrapper } from '@/components/ProgressIndicator/styles';
import PropTypes from 'prop-types';

/**
 * @description: 页面进度指示器
 */
const PageProgressIndicator = (props) => {
	const { scrollYProgress } = useScroll();

	return (
		<PageProgressIndicatorWrapper>
			<motion.div className={'bar'} style={{ scaleX: scrollYProgress }}>
				{props.children}
			</motion.div>
		</PageProgressIndicatorWrapper>
	);
};

PageProgressIndicator.propTypes = {
	children: PropTypes.node
};

export default PageProgressIndicator;
