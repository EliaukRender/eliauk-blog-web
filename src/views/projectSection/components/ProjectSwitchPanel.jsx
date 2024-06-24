import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ProjectSwitchPanelWrapper } from '@/views/projectSection/css/ProjectSwitchPanel';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';
// import MessageToast from '@/components/MessageToast';
import PropTypes from 'prop-types';
import { motion, LayoutGroup } from 'framer-motion';

/**
 * @description: 项目切换面板
 */
const ProjectSwitchPanel = ({ onChangeProjectName }) => {
	const projectList = [
		{ id: 1, name: 'EliaukManage' },
		{ id: 2, name: 'EliaukBlog' },
		{ id: 3, name: 'EliaukMusic' }
	];
	const [curProjectId, setCurProjectId] = useState(1);

	// 切换显示的项目
	const changeProject = (id) => {
		setCurProjectId(id);
	};

	useEffect(() => {
		onChangeProjectName(projectList.find((item) => item.id === curProjectId).name); // 通知父组件curProjectId变化
	}, [curProjectId]);

	return (
		<FadeInAnimationComp>
			<ProjectSwitchPanelWrapper>
				<motion.div className='project-switch' layout>
					<LayoutGroup>
						{projectList.map((item) => {
							return (
								<motion.div
									layout={'position'}
									style={{ width: curProjectId === item.id ? '250px' : '200px' }}
									transition={{ duration: 0.8, ease: 'linear' }}
									key={item.id}
									className={classNames('item', curProjectId === item.id ? 'item-active' : '')}
									onTap={() => {
										changeProject(item.id);
									}}>
									<motion.span layout> {item.name}</motion.span>
								</motion.div>
							);
						})}
					</LayoutGroup>
				</motion.div>
			</ProjectSwitchPanelWrapper>
		</FadeInAnimationComp>
	);
};

ProjectSwitchPanel.propTypes = {
	onChangeProjectName: PropTypes.func
};

export default memo(ProjectSwitchPanel);
