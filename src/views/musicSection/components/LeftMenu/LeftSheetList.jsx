import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftSheetListStyles } from '@/views/musicSection/components/LeftMenu/LeftSheetListStyles';
import { querySongListBySheetIdActon, setCurSheet } from '@/views/musicSection/store/modules/musicAppReducer';
import AddSheet from '@/views/musicSection/components/AddSheet/AddSheet';

/**
 * @description: 我的歌单  歌单列表
 */
const LeftSheetList = () => {
	const { sheetList, curSheet } = useSelector(
		(state) => ({
			sheetList: state.musicApp.sheetList,
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [activeSheet, setActiveSheet] = useState(false);

	// 监听路由变化
	useEffect(() => {
		setActiveSheet(location.pathname === '/music/like');
	}, [location]);

	// 切换歌单、公用路由所以无需路由跳转
	const changeSheet = (sheet) => {
		navigate('/music/like');
		if (location.pathname === '/music/like' && curSheet.sheetId === sheet.sheetId) return;
		dispatch(setCurSheet(sheet));
		dispatch(querySongListBySheetIdActon(sheet.sheetId));
	};

	return (
		<LeftSheetListStyles>
			<div className='menu-list'>
				<div className='title'>
					<span>我的歌单</span>
					<AddSheet></AddSheet>
				</div>
				{sheetList.map((item) => {
					return (
						<div
							key={item.sheetId}
							className={classNames('item', curSheet.sheetId === item.sheetId && activeSheet ? 'active' : '')}
							onClick={() => {
								changeSheet(item);
							}}>
							<i className={classNames('iconfont', item.sheetIcon)}></i>
							<span className='item-text'>{item.sheetName}</span>
						</div>
					);
				})}
			</div>
		</LeftSheetListStyles>
	);
};

LeftSheetList.propTypes = {};

export default memo(LeftSheetList);
