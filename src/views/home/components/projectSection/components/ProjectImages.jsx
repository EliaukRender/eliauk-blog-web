import React, { memo } from 'react';
import { Carousel } from 'antd';
import manageHome from '@/assets/image/project/manage-home.png';
import PropTypes from 'prop-types';
import { ProjectImagesWrapper } from '@/views/home/components/projectSection/css/ProjectImagesWrapper';

const ProjectImages = () => {
	return (
		<ProjectImagesWrapper>
			<Carousel arrows infinite={false}>
				<img className='img' src={manageHome} alt='' />
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
