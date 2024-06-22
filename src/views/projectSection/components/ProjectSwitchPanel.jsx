import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ProjectSwitchPanelWrapper } from '@/views/projectSection/css/ProjectSwitchPanel';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';
import MessageToast from '@/components/MessageToast';
import PropTypes from 'prop-types';

/**
 * @description: 项目切换面板
 */
const ProjectSwitchPanel = ({ onChangeProjectName }) => {
	const projectList = [
		{ id: 1, name: 'EliaukManage' },
		{ id: 2, name: 'EliaukBlog' },
		{ id: 3, name: 'EliaukCloudMusic' }
	];
	const [curProjectId, setCurProjectId] = useState(1);

	// 切换显示的项目
	const changeProject = (id) => {
		if (id === 3) {
			return MessageToast.warning('正在开发中~');
		}
		setCurProjectId(id);
	};

	useEffect(() => {
		onChangeProjectName(projectList.find((item) => item.id === curProjectId).name); // 通知父组件curProjectId变化
	}, [curProjectId]);

	return (
		<FadeInAnimationComp>
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
		</FadeInAnimationComp>
	);
};

ProjectSwitchPanel.propTypes = {
	onChangeProjectName: PropTypes.func
};

export default memo(ProjectSwitchPanel);
