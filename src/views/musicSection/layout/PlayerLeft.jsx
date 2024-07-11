import React, { memo } from 'react';
import { PlayerLeftStyles } from '@/views/musicSection/styles/PlayerLeftStyles';
import { myMusicMenuList, onlineMusicMenuList } from '@/views/musicSection/constant';
import LeftMenuList from '@/views/musicSection/components/LeftMenu/LeftMenuList';
import { useNavigate } from 'react-router-dom';

const PlayerLeft = () => {
	const menuList = [...onlineMusicMenuList, ...myMusicMenuList];
	const navigate = useNavigate();

	// 切换菜单
	const changeCurMenu = (menuId) => {
		console.log('menuId', menuId);
		const menu = menuList.find((item) => item.id === menuId);
		navigate(`/home/${menu.routerPath}`);
	};

	return (
		<PlayerLeftStyles>
			{/* logo区域 */}
			<div className='logo-area'>
				<img src={require('@/views/musicSection/images/music-logo.png')} alt='' />
				<span className='logo-title'>Eliauk音乐</span>
			</div>
			{/* 在线音乐 */}
			<LeftMenuList menuListTitle='在线音乐' menuList={onlineMusicMenuList} changeCurMenu={changeCurMenu}></LeftMenuList>
			{/* 我的音乐 */}
			<LeftMenuList menuListTitle='我的音乐' menuList={myMusicMenuList} changeCurMenu={changeCurMenu}></LeftMenuList>
		</PlayerLeftStyles>
	);
};

export default memo(PlayerLeft);
