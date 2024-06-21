import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ProjectIntroduceWrapper } from '@/views/home/components/projectSection/css/ProjectIntroduce';
import FadeInAnimationComp from '@/components/Animation/FadeInViewAnimation/FadeInAnimationComp';

const ProjectIntroduce = ({ goToProject }) => {
	return (
		<FadeInAnimationComp>
			<ProjectIntroduceWrapper>
				<div
					className='project-title'
					onClick={() => {
						goToProject('EliaukManageWeb');
					}}>
					EliaukManageWeb
				</div>
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
			</ProjectIntroduceWrapper>
		</FadeInAnimationComp>
	);
};

ProjectIntroduce.propTypes = {
	goToProject: PropTypes.func
};

export default memo(ProjectIntroduce);
