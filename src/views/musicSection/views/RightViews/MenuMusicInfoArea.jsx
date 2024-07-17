import React, { memo, useEffect, useState } from 'react';
import { MenuMusicInfoAreaStyles } from '@/views/musicSection/views/RightViews/styles/MenuMusicInfoAreaStyles';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 菜单对应的歌单信息
 */
const MenuMusicInfoArea = () => {
	const { menuList, curMenuId } = useSelector(
		(state) => ({
			menuList: state.musicApp.menuList,
			curMenuId: state.musicApp.curMenuId,
		}),
		shallowEqual,
	);
	const [menu, setMenu] = useState();

	useEffect(() => {
		setMenu(menuList.find((item) => item.menuId === curMenuId));
	}, [curMenuId, menuList]);

	return (
		<MenuMusicInfoAreaStyles>
			<div className='top-common-area'>
				<img className='menu-image' src={require('@/views/musicSection/images/changpianji.png')} alt='' />
				<div className='menu-info'>
					<div className='menu-name'>
						<div className='title'>{menu?.menuName}</div>
						<div className='edit'>
							<i className='iconfont icon-bianji'></i>
							<span>编辑</span>
						</div>
					</div>
					<div className='menu-intro'>{menu?.menuIntro}</div>
					<div className='operation'>
						<div className='btn'>
							<i className='iconfont icon-bofang'></i>播放
						</div>
						<div className='btn'>
							<i className='iconfont icon-xiazai'></i>下载
						</div>
						<div className='btn'>
							<i className='iconfont icon-fenxiang'></i>分享
						</div>
					</div>
				</div>
			</div>
		</MenuMusicInfoAreaStyles>
	);
};

export default memo(MenuMusicInfoArea);
