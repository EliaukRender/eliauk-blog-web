import React, { memo, useEffect, useState } from 'react';
import { LeftMenuListStyles } from '@/views/eliaukMusic/components/LeftMenu/LeftMenuListStyles';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setCurMenu } from '@/views/eliaukMusic/store/modules/musicAppReducer';

/**
 * @description: 在线音乐  菜单列表
 */
const LeftMenuList = () => {
	const { menuList, curMenu } = useSelector(
		(state) => ({
			menuList: state.musicApp.menuList,
			curMenu: state.musicApp.curMenu,
		}),
		shallowEqual,
	);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [activeMenu, setActiveMenu] = useState(false);

	// 监听路由变化
	useEffect(() => {
		setActiveMenu(location.pathname !== '/music/like');
	}, [location]);

	// 点击菜单
	const clickMenu = (menu) => {
		navigate(`/music${menu.routePath}`); // 路由跳转
		if (menu.menuId !== curMenu.menuId) {
			dispatch(setCurMenu(menu));
		}
	};

	return (
		<LeftMenuListStyles>
			<div className='title'>在线音乐</div>
			{menuList.map((item) => {
				return (
					<div
						key={item.menuId}
						className={classNames('item', curMenu.menuId === item.menuId && activeMenu ? 'active' : '')}
						onClick={() => {
							clickMenu(item);
						}}>
						<i className={classNames('iconfont', item.menuIcon)}></i>
						<span className='item-text'>{item.menuName}</span>
					</div>
				);
			})}
		</LeftMenuListStyles>
	);
};

LeftMenuList.propTypes = {};

export default memo(LeftMenuList);
