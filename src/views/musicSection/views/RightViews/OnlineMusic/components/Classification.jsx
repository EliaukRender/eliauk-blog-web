import React, { memo, useEffect, useState } from 'react';
import { ClassificationStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/ClassificationStyles';
import { shallowEqual, useSelector } from 'react-redux';
import { MENU_ID_ENUM, MusicHomeTitleList, VideoPageTitleList } from '@/views/musicSection/constant';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Classification = ({ changeTitleId, curTitleId }) => {
	const { menuList, curMenuId } = useSelector(
		(state) => ({
			menuList: state.musicApp.menuList,
			curMenuId: state.musicApp.curMenuId,
		}),
		shallowEqual,
	);
	const [curMenu, setCurMenu] = useState(MENU_ID_ENUM.MUSIC_HOME); // 当前的菜单
	const [curTitleList, setCurTitleList] = useState([]); //

	useEffect(() => {
		// 音乐馆
		if (curMenuId === MENU_ID_ENUM.MUSIC_HOME) {
			setCurTitleList(MusicHomeTitleList);
		}
		// 视频
		if (curMenuId === MENU_ID_ENUM.VIDEO) {
			setCurTitleList(VideoPageTitleList);
		}
		const menu = menuList.find((menu) => menu.menuId === curMenuId);
		menu && setCurMenu(menu);
	}, [menuList, curMenuId]);

	return (
		<ClassificationStyles>
			<div className='menu-title'>{curMenu?.menuName}</div>
			<div className='title-list'>
				{curTitleList.map((item) => {
					return (
						<div
							key={item.id}
							className={classNames('item', curTitleId === item.id ? 'item-selected' : '')}
							onClick={() => {
								changeTitleId(item.id);
							}}>
							{item.name}
						</div>
					);
				})}
			</div>
		</ClassificationStyles>
	);
};

Classification.propTypes = {
	changeTitleId: PropTypes.func,
	curTitleId: PropTypes.number,
};

export default memo(Classification);
