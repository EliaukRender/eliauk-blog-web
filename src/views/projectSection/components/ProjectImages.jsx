import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectImagesStyles } from '@/views/projectSection/css/ProjectImagesStyles';
import FadeInViewAnimation from '@/components/Animation/FadeInViewAnimation';
import CarouselPictures from '@/components/CarouselPictures';

/**
 * @description: 项目展示的轮播图
 */
const ProjectImages = ({ projectName }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		if (projectName) {
			// 目前只有一张图片
			setImages([require(`@/assets/image/project/${projectName}-1.png`)]);
		}
	}, [projectName]);

	return (
		<ProjectImagesStyles>
			<FadeInViewAnimation>{!!projectName && <CarouselPictures images={images}></CarouselPictures>}</FadeInViewAnimation>
		</ProjectImagesStyles>
	);
};

ProjectImages.propTypes = {
	projectName: PropTypes.string,
	startPlayAnimation: PropTypes.bool
};

export default memo(ProjectImages);
