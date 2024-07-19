import React, { memo } from 'react';
import { TopHomeBarStyles } from '@/views/common/TopHomeBar/TopHomeBarStyles';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTopBarAnimation } from '@/hooks/animation/useTopBarAnimation';
import UserLoginRegister from '@/views/common/UserInfoArea/UserInfoArea';
import { useLocation, useNavigate } from 'react-router-dom';
import { menuList } from '@/constant';

/**
 * @description: 系统菜单导航栏
 */
const TopHomeBar = () => {
	const { variants, controls } = useTopBarAnimation(); // 动态控制TopHomeBar的显示隐藏
	const navigate = useNavigate();
	const location = useLocation();

	// 点击菜单
	const handleClickMenu = (menu) => {
		navigate(menu.path);
	};

	console.log('渲染了吗');

	return (
		<TopHomeBarStyles>
			<motion.div className='top-home-bar' initial={{ opacity: 0, translateY: -80 }} variants={variants} animate={controls}>
				{/* logo区域 */}
				<div className='logo-box'>
					<img className='logo' src={require('@/assets/image/logo.jpg')} alt='' />
					<div className='name'>EliaukBlog</div>
				</div>
				{/* 菜单区域 */}
				<div className='bar-box'>
					{menuList.map((item) => {
						return (
							<div
								key={item.id}
								className={classNames('item', location.pathname.includes(item.path) ? 'active' : '')}
								onClick={() => {
									handleClickMenu(item);
								}}>
								<div className={location.pathname.includes(item.path) ? 'active-bar' : ''}></div>
								<span>{item.name}</span>
							</div>
						);
					})}
				</div>
				{/*  登录注册入口 */}
				<UserLoginRegister></UserLoginRegister>
			</motion.div>
		</TopHomeBarStyles>
	);
};

export default memo(TopHomeBar);
