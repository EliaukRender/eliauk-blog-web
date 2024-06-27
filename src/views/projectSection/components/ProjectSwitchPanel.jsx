import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SwitchPanelStyles } from '@/views/projectSection/css/SwitchPanelStyles';
import PropTypes from 'prop-types';

/**
 * @description: 项目切换面板
 */
const ProjectSwitchPanel = ({ onChangeProjectName }) => {
	const projectList = [
		{ id: 1, name: 'EliaukManage' },
		{ id: 2, name: 'EliaukBlog' },
		{ id: 3, name: 'EliaukMusic' }
	];
	const [curProjectName, setCurProjectName] = useState('EliaukManage');

	useEffect(() => {
		onChangeProjectName(curProjectName); // 通知父组件curProjectId变化
	}, [curProjectName]);

	return (
		<SwitchPanelStyles>
			<div className='project-switch'>
				{projectList.map((item) => {
					return (
						<div
							key={item.id}
							className={classNames('item', curProjectName === item.name ? 'item-active' : '')}
							onClick={() => {
								setCurProjectName(item.name);
							}}>
							<span> {item.name}</span>
						</div>
					);
				})}
			</div>
		</SwitchPanelStyles>
	);
};

ProjectSwitchPanel.propTypes = {
	onChangeProjectName: PropTypes.func
};

export default memo(ProjectSwitchPanel);
