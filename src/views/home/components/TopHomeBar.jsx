import React, { memo } from 'react';
import { TopHomeBarStyles } from '@/views/home/css/TopHomeBarStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useTopBarAnimation } from '@/hooks/animation/useTopBarAnimation';
import { shallowEqual, useSelector } from 'react-redux';
import { handleScrollTo } from '@/utils/handleScrollPage';
import UserLoginRegister from '@/views/home/components/UserLoginRegister';

/**
 * @description: 首页菜单导航栏
 */
const TopHomeBar = () => {
	const menuList = [
		{ id: 0, name: '首页' },
		{ id: 1, name: '学习项目' },
		{ id: 2, name: '博主简介' },
		{ id: 3, name: '留言板' }
	];
	const { variants, controls } = useTopBarAnimation(); // 动态控制TopHomeBar的显示隐藏
	const { currentSectionId } = useSelector(
		(state) => ({
			currentSectionId: state.global.currentSectionId
		}),
		shallowEqual
	);

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
								className={classNames('item', currentSectionId === item.id ? 'active' : '')}
								onClick={() => {
									handleScrollTo(window.innerHeight * item.id);
								}}>
								<div className={currentSectionId === item.id ? 'active-bar' : ''}></div>
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

TopHomeBar.propTypes = {
	abc: PropTypes.string
};

export default memo(TopHomeBar);
