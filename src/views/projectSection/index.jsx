import React, { memo, useEffect, useState } from 'react';
import { ProjectSectionStyles } from '@/views/projectSection/styles';
import PropTypes from 'prop-types';
import ProjectImages from '@/views/projectSection/components/ProjectImages';
import ProjectIntroduce from '@/views/projectSection/components/ProjectIntroduce';
import ProjectSwitchPanel from '@/views/projectSection/components/ProjectSwitchPanel';
import MessageToast from '@/components/MessageToast';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { setCurSectionId } from '@/store/modules/globalReducer';

/**
 * @description: 板块---介绍项目
 */
const ProjectSection = () => {
	const [curProjectName, setCurProjectName] = useState();
	const { ref, inView } = useInView({ threshold: 0.4 });
	const dispatch = useDispatch();

	useEffect(() => {
		if (!inView) return;
		dispatch(setCurSectionId(1));
	}, [inView]);

	// 打开项目网址
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
		<ProjectSectionStyles ref={ref}>
			{/* 项目切换板 */}
			<ProjectSwitchPanel onChangeProjectName={onChangeProjectName}></ProjectSwitchPanel>
			{/* 项目信息 */}
			<div className='project-box'>
				<div className='left'>
					<ProjectImages projectName={curProjectName}></ProjectImages>
				</div>
				<div className='right'>
					<ProjectIntroduce goToProject={goToProject} projectName={curProjectName}></ProjectIntroduce>
				</div>
			</div>
		</ProjectSectionStyles>
	);
};

ProjectSection.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectSection);
