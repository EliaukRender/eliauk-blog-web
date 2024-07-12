import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { LeftMenuListStyles } from '@/views/musicSection/styles/LeftMenuListStyles';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setCurMenuId } from '@/views/musicSection/store/modules/musicAppReducer';

/**
 * @description: 左侧菜单列表
 */
const LeftMenuList = ({ menuListTitle, menuList, changeCurMenu }) => {
	const dispatch = useDispatch();
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
							key={item.id}
							className={classNames('item', curMenuId === item.id ? 'active' : '')}
							onClick={() => {
								dispatch(setCurMenuId(item.id));
								changeCurMenu(item.id);
							}}>
							<i className={classNames('iconfont', item.icon)}></i>
							<span className='item-text'>{item.name}</span>
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
