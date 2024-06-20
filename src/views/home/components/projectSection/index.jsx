import React, { forwardRef, memo } from 'react';
import { ProjectSectionWrapper } from '@/views/home/components/projectSection/styles';
import ProjectSwitchPanel from '@/views/home/components/projectSection/components/ProjectSwitchPanel';
import ProjectOverview from '@/views/home/components/projectSection/components/ProjectOverview';

/**
 * @description: 个人项目板块
 */
const ProjectSection = () => {
	// 前往不同的项目
	const goToProject = (projectName) => {
		switch (projectName) {
			case 'EliaukManageWeb':
				window.open('http://47.113.177.51:53001', '_blank');
				break;
		}
	};

	return (
		<ProjectSectionWrapper>
			{/* 项目切换板 */}
			<ProjectSwitchPanel></ProjectSwitchPanel>
			{/* 项目总览 */}
			<ProjectOverview goToProject={goToProject}></ProjectOverview>
		</ProjectSectionWrapper>
	);
};

export default memo(forwardRef(ProjectSection));
