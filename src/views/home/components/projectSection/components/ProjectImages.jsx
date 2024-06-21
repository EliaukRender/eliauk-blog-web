import React, { memo } from 'react';
import { Carousel } from 'antd';
import manageHome from '@/assets/image/project/manage-home.png';
import PropTypes from 'prop-types';
import { ProjectImagesWrapper } from '@/views/home/components/projectSection/css/ProjectImagesWrapper';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';

const ProjectImages = () => {
	return (
		<ProjectImagesWrapper>
			<Carousel arrows infinite={true}>
				<FadeInAnimationComp>
					<img className='img' src={manageHome} alt='' />
				</FadeInAnimationComp>
				<img className='img' src={manageHome} alt='' />
				<img className='img' src={manageHome} alt='' />
			</Carousel>
		</ProjectImagesWrapper>
	);
};

ProjectImages.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectImages);
