import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ProjectImagesWrapper } from '@/views/projectSection/css/ProjectImagesWrapper';

/**
 * @description: 项目展示的轮播图
 */
const ProjectImages = ({ projectName }) => {
	return (
		<ProjectImagesWrapper>
			{projectName && <img className='img' src={require(`@/assets/image/project/${projectName}-1.png`)} alt='' />}
		</ProjectImagesWrapper>
	);
};

ProjectImages.propTypes = {
	projectName: PropTypes.string,
	startPlayAnimation: PropTypes.bool
};

export default memo(ProjectImages);
