import React, { forwardRef, memo, useState } from 'react';
import { ProjectSectionWrapper } from '@/views/home/components/projectSection/styles';
import manageHome from '@/assets/image/project/manage-home.png';
import classNames from 'classnames';

/**
 * @description: 个人项目介绍
 */
const ProjectSection = () => {
	const projectList = [
		{ id: 1, name: 'EliaukManage' },
		{ id: 2, name: 'EliaukCloudMusic' }
	];
	const [curProjectId, setCurProjectId] = useState(1);

	// 切换显示的项目
	const changeProject = (id) => {
		setCurProjectId(id);
	};

	// 前往项目
	const goToProject = () => {
		window.open('http://47.113.177.51:53001', '_blank');
	};

	return (
		<ProjectSectionWrapper>
			<div className='project-switch'>
				{projectList.map((item) => {
					return (
						<div
							key={item.id}
							className={classNames('item', curProjectId === item.id ? 'item-active' : '')}
							onClick={() => {
								changeProject(item.id);
							}}>
							{item.name}
						</div>
					);
				})}
			</div>
			<div className='project-box'>
				<div className='left'>
					<img className='img' src={manageHome} alt='' onClick={goToProject} />
				</div>
				<div className='right'>
					<div className='text-box'>
						<div className='project-title'>EliaukManageWeb</div>
						<div className='project-web'>前端：Vue3+Vite+Ts+Pinia+ElementPlus</div>
						<div className='project-server'>后端：Node+Koa+@Koa/Router+Mysql</div>
						<div className='project-desc'>
							<div>
								<strong>简介：</strong>
								<span>该系统的应用场景是后台管理业务，使用当下较热门的前端技术栈,封装了部分常用的组件、指令、axios网络请求。</span>
							</div>
							<div>
								<strong>组件：</strong>
								<span>表格Table、对话框Dialog、抽屉Drawer、加载Loading等。</span>
							</div>
							<div>
								<strong>指令：</strong>
								<span>复制、防抖节流、拖动、水印等等。</span>
							</div>
							<div>
								<strong>持续完善建设中...</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ProjectSectionWrapper>
	);
};

export default memo(forwardRef(ProjectSection));
