import React, { memo } from 'react';
import { DemoNavigationStyles } from '@/views/demoCollection/styles/DemoNavigationStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description: demo导航条
 */
const DemoNavigation = ({ cmpNameList, curComponentName, changeComponent }) => {
	return (
		<DemoNavigationStyles>
			<div className='content'>
				{cmpNameList.map((name) => (
					<div
						className={classNames('cmp-name', curComponentName === name ? 'active' : '')}
						onClick={() => {
							changeComponent(name);
						}}>
						{name}
					</div>
				))}
			</div>
		</DemoNavigationStyles>
	);
};

DemoNavigation.propTypes = {
	cmpNameList: PropTypes.array,
	curComponentName: PropTypes.string,
	changeComponent: PropTypes.func,
};

export default memo(DemoNavigation);
