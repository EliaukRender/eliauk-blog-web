import React, { memo } from 'react';
import { PlayerLeftStyles } from '@/views/musicSection/styles/PlayerLeftStyles';
import LeftMenuList from '@/views/musicSection/components/LeftMenu/LeftMenuList';
import { useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 播放器主界面左侧区域
 */
const PlayerLeft = () => {
	const navigate = useNavigate();
	const { menuList } = useSelector(
		(state) => ({
			menuList: state.musicApp.menuList,
		}),
		shallowEqual,
	);

	// 切换菜单
	const changeCurMenu = (menuId) => {
		const menu = menuList.find((item) => item.menuId === menuId);
		navigate(`/music${menu.menuPath}`);
	};

	return (
		<PlayerLeftStyles>
			{/* logo区域 */}
			<div className='logo-area'>
				<img src={require('@/views/musicSection/images/music-logo.png')} alt='' />
				<span className='logo-title'>Eliauk音乐</span>
			</div>
			{/* 在线音乐列表 */}
			<LeftMenuList menuListTitle='在线音乐' menuList={menuList?.filter((menu) => menu.menuType === 0)} changeCurMenu={changeCurMenu}></LeftMenuList>
			{/* 我的音乐列表 */}
			<LeftMenuList menuListTitle='我的音乐' menuList={menuList?.filter((menu) => menu.menuType === 1)} changeCurMenu={changeCurMenu}></LeftMenuList>
		</PlayerLeftStyles>
	);
};

export default memo(PlayerLeft);
