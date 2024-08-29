import React, { memo } from 'react';
import { ShowDemoAreaStyles } from '@/views/demoCollection/styles/ShowDemoAreaStyles';
import PropTypes from 'prop-types';

/**
 * @description: Demo展示区域
 */
const ShowDemoArea = ({ components, curComponentName }) => {
	const Component = components[curComponentName]; // 当前demo组件

	return (
		<ShowDemoAreaStyles>
			<div className={'content'}>{<Component></Component>}</div>
		</ShowDemoAreaStyles>
	);
};

ShowDemoArea.propTypes = {
	components: PropTypes.object,
	curComponentName: PropTypes.string,
};
export default memo(ShowDemoArea);
