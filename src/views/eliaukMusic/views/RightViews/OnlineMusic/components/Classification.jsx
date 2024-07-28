import React, { memo, useEffect, useState } from 'react';
import { ClassificationStyles } from '@/views/eliaukMusic/views/RightViews/OnlineMusic/styles/ClassificationStyles';
import { shallowEqual, useSelector } from 'react-redux';
import { MENU_ID_ENUM, MusicHomeSortList, VideoPageSortList } from '@/views/eliaukMusic/constant';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Classification = ({ changeSort, curSort }) => {
	const { curMenu } = useSelector(
		(state) => ({
			curMenu: state.musicApp.curMenu,
		}),
		shallowEqual,
	);
	const [curTitleList, setCurTitleList] = useState([]);

	useEffect(() => {
		// 音乐馆
		if (curMenu.menuId === MENU_ID_ENUM.MUSIC_HOME) {
			setCurTitleList(MusicHomeSortList);
			changeSort(MusicHomeSortList[0]);
		}
		// 视频
		if (curMenu.menuId === MENU_ID_ENUM.VIDEO) {
			setCurTitleList(VideoPageSortList);
			changeSort(VideoPageSortList[0]);
		}
	}, [curMenu]);

	return (
		<ClassificationStyles>
			<div className='menu-title'>{curMenu?.menuName}</div>
			<div className='title-list'>
				{curTitleList.map((item) => {
					return (
						<div
							key={item.id}
							className={classNames('item', curSort.id === item.id ? 'item-selected' : '')}
							onClick={() => {
								changeSort(item);
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
	changeSortId: PropTypes.func,
	curSortId: PropTypes.number,
};

export default memo(Classification);
