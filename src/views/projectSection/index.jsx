import React, { memo, useState } from 'react';
import { ProjectSectionWrapper } from '@/views/projectSection/styles';
import PropTypes from 'prop-types';
import ProjectImages from '@/views/projectSection/components/ProjectImages';
import ProjectIntroduce from '@/views/projectSection/components/ProjectIntroduce';
import ProjectSwitchPanel from '@/views/projectSection/components/ProjectSwitchPanel';
import MessageToast from '@/components/MessageToast';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';
import MoveAnimation from '@/components/Animation/moveAnimation';

/**
 * @description: 项目细节介绍
 */
const ProjectSection = () => {
	const [curProjectName, setCurProjectName] = useState();

	const goToProject = (projectName) => {
		switch (projectName) {
			case 'EliaukManage':
				window.open('http://47.113.177.51:53001', '_blank');
				break;
			case 'EliaukBlog':
				MessageToast.success('正在访问~');
				break;
		}
	};

	// 项目发生变化
	const onChangeProjectName = (name) => {
		setCurProjectName(name);
	};

	return (
		<ProjectSectionWrapper>
			{/* 项目切换板 */}
			<ProjectSwitchPanel onChangeProjectName={onChangeProjectName}></ProjectSwitchPanel>
			{/* 项目信息 */}
			<div className='project-box'>
				<div className='left'>
					{/* 项目轮播图：FadeInAnimationComp是进入视口时触发一次；MoveAnimation是切换项目时触发  */}
					<FadeInAnimationComp>
						<MoveAnimation>
							<ProjectImages projectName={curProjectName}></ProjectImages>
						</MoveAnimation>
					</FadeInAnimationComp>
				</div>
				<div className='right'>
					{/* 项目文字介绍: FadeInAnimationComp是进入视口时触发一次；MoveAnimation是切换项目时触发 */}
					<FadeInAnimationComp>
						<MoveAnimation>
							<ProjectIntroduce goToProject={goToProject} projectName={curProjectName}></ProjectIntroduce>
						</MoveAnimation>
					</FadeInAnimationComp>
				</div>
			</div>
		</ProjectSectionWrapper>
	);
};

ProjectSection.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectSection);
