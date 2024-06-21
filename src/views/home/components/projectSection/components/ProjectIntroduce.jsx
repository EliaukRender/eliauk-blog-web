import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ProjectIntroduceWrapper } from '@/views/home/components/projectSection/css/ProjectIntroduce';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';
import { Divider, Descriptions } from 'antd';
import SvgIcon from '@/components/SvgIcon';

const ProjectIntroduce = ({ goToProject }) => {
	// 文本标签效果
	const labelStyle = {
		width: '100px',
		fontWeight: 600,
		fontSize: '16px'
	};
	// 文字描述表格的文本配置
	const descriptionItems = [
		{
			key: '1',
			label: '概述',
			span: 3,
			children: '该系统的应用场景是后台管理业务，使用当下较热门的前端技术栈，封装了部分常用的组件、指令、axios网络请求。'
		},
		{
			key: '2',
			label: '组件',
			span: 3,
			children: '表格Table、对话框Dialog、抽屉Drawer、加载Loading等。'
		},
		{
			key: '3',
			label: '指令',
			span: 3,
			children: '复制、防抖节流、拖动、水印等等。'
		},
		{
			key: '4',
			label: '其他',
			span: 3,
			children: '该项目持续完善建设中...'
		}
	];
	// 技术栈列表
	const technologyStack = [
		{ name: 'vue', url: 'https://cn.vuejs.org' },
		{ name: 'vite', url: 'https://cn.vitejs.dev' },
		{ name: 'typescript', url: 'https://www.tslang.cn/index.html' },
		{ name: 'pinia', url: 'https://pinia.web3doc.top/introduction.html' },
		{ name: 'element', url: 'https://element-plus.org/zh-CN/#/zh-CN' },
		{ name: 'nodejs', url: 'https://nodejs.org/zh-cn' },
		{ name: 'koa', url: 'https://koajs.docschina.org' },
		{ name: 'mysql', url: 'https://www.mysql.com' }
	];

	// 打开官网
	const openUrl = (url) => {
		window.open(url, '_blank');
	};

	return (
		<FadeInAnimationComp>
			<ProjectIntroduceWrapper>
				<div
					className='title'
					onClick={() => {
						goToProject('EliaukManageWeb');
					}}>
					<SvgIcon name='backendSystem' width={50} height={50}></SvgIcon>
					<span>EliaukManageWeb</span>
				</div>
				<Divider />
				<div className='sub-title'>技术栈</div>
				<div className='svg-list'>
					{technologyStack.map((item) => {
						return (
							<div
								key={item.name}
								onClick={() => {
									openUrl(item.url);
								}}>
								<SvgIcon name={item.name} width={60} height={60}></SvgIcon>
							</div>
						);
					})}
				</div>
				<div className='sub-title'>简介</div>
				<Descriptions bordered items={descriptionItems} labelStyle={labelStyle} />
			</ProjectIntroduceWrapper>
		</FadeInAnimationComp>
	);
};

ProjectIntroduce.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectIntroduce);
