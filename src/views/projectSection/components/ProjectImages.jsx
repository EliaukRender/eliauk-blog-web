import React, { memo } from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import { ProjectImagesWrapper } from '@/views/projectSection/css/ProjectImagesWrapper';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';

/**
 * @description: 项目展示的轮播图
 */
const ProjectImages = ({ projectName }) => {
	return (
		<ProjectImagesWrapper>
			<Carousel arrows infinite={true}>
				<FadeInAnimationComp>{projectName && <img className='img' src={require(`@/assets/image/project/${projectName}-1.png`)} alt='' />}</FadeInAnimationComp>
				{projectName && <img className='img' src={require(`@/assets/image/project/${projectName}-2.png`)} alt='' />}
			</Carousel>
		</ProjectImagesWrapper>
	);
};

ProjectImages.propTypes = {
	goToProject: PropTypes.func,
	projectName: PropTypes.string
};

export default memo(ProjectImages);
