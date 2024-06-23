import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectIntroduceWrapper } from '@/views/projectSection/css/ProjectIntroduce';
import { Divider, Descriptions } from 'antd';
import SvgIcon from '@/components/SvgIcon';
import { projectInfo } from '@/views/projectSection/constant';

/**
 * @description: 项目信息描述
 */
const ProjectIntroduce = ({ goToProject, projectName }) => {
	const [descriptionItems, setDescriptionItems] = useState([]);
	const [technologyStack, setTechnologyStack] = useState([]);

	useEffect(() => {
		// 需要先判断projectName是否为有效值
		if (projectName) {
			let { descriptionItems, technologyStack } = projectInfo[projectName];
			setTechnologyStack(technologyStack);
			setDescriptionItems(descriptionItems);
		}
	}, [projectName]);

	// 文本标签效果
	const labelStyle = {
		width: '100px',
		fontWeight: 600,
		fontSize: '16px'
	};

	// 打开官网
	const openUrl = (url) => {
		window.open(url, '_blank');
	};

	return (
		<ProjectIntroduceWrapper>
			<div
				className='title'
				onClick={() => {
					goToProject(projectName);
				}}>
				<SvgIcon name='backendSystem' width={50} height={50}></SvgIcon>
				<span>{projectName}</span>
			</div>
			<Divider />
			<div className='sub-title'>技术栈</div>
			<div className='svg-list'>
				{technologyStack?.map((item) => {
					return (
						<div
							key={item.name}
							onClick={() => {
								openUrl(item.url);
							}}>
							<SvgIcon name={item.name} width={item.name === 'redux' ? 50 : 60} height={60}></SvgIcon>
						</div>
					);
				})}
			</div>
			<div className='sub-title'>简介</div>
			{/*{!!descriptionItems?.length && <Descriptions bordered items={descriptionItems} labelStyle={labelStyle} />}*/}
			<Descriptions bordered items={descriptionItems} labelStyle={labelStyle} />
		</ProjectIntroduceWrapper>
	);
};
ProjectIntroduce.propTypes = {
	goToProject: PropTypes.func,
	projectName: PropTypes.string
};

export default memo(ProjectIntroduce);
