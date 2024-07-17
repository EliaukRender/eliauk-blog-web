import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LeftMenuListStyles } from '@/views/musicSection/components/LeftMenu/LeftMenuListStyles';
import classNames from 'classnames';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 左侧菜单列表
 */
const LeftMenuList = ({ menuListTitle, menuList, changeCurMenu }) => {
	const { curMenuId } = useSelector(
		(state) => ({
			curMenuId: state.musicApp.curMenuId,
		}),
		shallowEqual,
	);

	return (
		<LeftMenuListStyles>
			<div className='menu-list'>
				<div className='title'>{menuListTitle}</div>
				{menuList.map((item) => {
					return (
						<div
							key={item.menuId}
							className={classNames('item', curMenuId === item.menuId ? 'active' : '')}
							onClick={() => {
								if (curMenuId === item.menuId) return;
								changeCurMenu(item.menuId);
							}}>
							<i className={classNames('iconfont', item.menuIcon)}></i>
							<span className='item-text'>{item.menuName}</span>
						</div>
					);
				})}
			</div>
		</LeftMenuListStyles>
	);
};

LeftMenuList.propTypes = {
	menuList: PropTypes.array, // 菜单列表
	menuListTitle: PropTypes.string, // 菜单列表标题
	changeCurMenu: PropTypes.func, // 切换菜单
};

export default memo(LeftMenuList);
