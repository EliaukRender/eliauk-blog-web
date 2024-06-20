import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { ProjectSwitchPanelWrapper } from '@/views/home/components/projectSection/css/ProjectSwitchPanel';

/**
 * @description: 项目切换板
 */
const ProjectSwitchPanel = () => {
	const projectList = [
		{ id: 1, name: 'EliaukManage' },
		{ id: 2, name: 'EliaukCloudMusic' }
	];
	const [curProjectId, setCurProjectId] = useState(1);

	// 切换显示的项目
	const changeProject = (id) => {
		setCurProjectId(id);
	};

	return (
		<ProjectSwitchPanelWrapper>
			<div className='project-switch'>
				{projectList.map((item) => {
					return (
						<div
							key={item.id}
							className={classNames('item', curProjectId === item.id ? 'item-active' : '')}
							onClick={() => {
								changeProject(item.id);
							}}>
							{item.name}
						</div>
					);
				})}
			</div>
		</ProjectSwitchPanelWrapper>
	);
};

export default memo(ProjectSwitchPanel);
