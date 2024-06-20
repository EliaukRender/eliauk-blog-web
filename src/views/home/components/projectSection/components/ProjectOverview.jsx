import React, { memo } from 'react';
import { ProjectOverviewWrapper } from '@/views/home/components/projectSection/css/ProjectOverviewWrapper';
import PropTypes from 'prop-types';
import ProjectImages from '@/views/home/components/projectSection/components/ProjectImages';
import ProjectIntroduce from '@/views/home/components/projectSection/components/ProjectIntroduce';

/**
 * @description: 项目细节介绍
 */
const ProjectOverview = () => {
	return (
		<ProjectOverviewWrapper>
			<div className='project-box'>
				<div className='left'>
					{/* 项目轮播图 */}
					<ProjectImages></ProjectImages>
				</div>
				<div className='right'>
					{/* 项目文字介绍 */}
					<ProjectIntroduce></ProjectIntroduce>
				</div>
			</div>
		</ProjectOverviewWrapper>
	);
};

ProjectOverview.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectOverview);
