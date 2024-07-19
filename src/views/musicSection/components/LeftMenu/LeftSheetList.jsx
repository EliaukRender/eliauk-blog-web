import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftSheetListStyles } from '@/views/musicSection/components/LeftMenu/LeftSheetListStyles';
import { querySongListBySheetIdActon, setCurSheet } from '@/views/musicSection/store/modules/musicAppReducer';
import AddSheet from '@/views/musicSection/components/AddSheet/AddSheet';
import { motion } from 'framer-motion';
import { handleDeleteSheet } from '@/views/musicSection/store/actions/musicAppAction';

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
	const [curDeleteSheetId, setCurDeleteSheetId] = useState(null);
	const [timer, setTimer] = useState(null);

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

	// 显示删除按钮
	const onMouseEnter = (sheetId) => {
		const timer = setTimeout(() => {
			setCurDeleteSheetId(sheetId);
		}, 1000);
		setTimer(timer);
	};

	// 隐藏删除按钮
	const onMouseLeave = (sheetId) => {
		clearTimeout(timer);
		setCurDeleteSheetId(null);
	};

	// 点击删除歌单
	const clickDeleteSheet = async (event, sheetId) => {
		event.preventDefault();
		event.stopPropagation();
		await handleDeleteSheet({ sheetId });
	};

	return (
		<LeftSheetListStyles>
			<div className='title'>
				<span>我的歌单</span>
				{/* 新增歌单 */}
				<AddSheet></AddSheet>
			</div>
			<div className='list'>
				{sheetList.map((item) => {
					return (
						<motion.div
							onMouseEnter={() => {
								onMouseEnter(item.sheetId);
							}}
							onMouseLeave={() => {
								onMouseLeave();
							}}
							key={item.sheetId}
							className={classNames('item', curSheet.sheetId === item.sheetId && activeSheet ? 'active' : '')}
							onClick={() => {
								changeSheet(item);
							}}>
							<i className={classNames('iconfont', item.sheetIcon)}></i>
							<span className='item-text'>{item.sheetName}</span>
							{curDeleteSheetId === item.sheetId && (
								<i
									className='iconfont icon-guanbi'
									onClick={(event) => {
										clickDeleteSheet(event, item.sheetId);
									}}></i>
							)}
						</motion.div>
					);
				})}
			</div>
		</LeftSheetListStyles>
	);
};

LeftSheetList.propTypes = {};

export default memo(LeftSheetList);
