import React, { memo, Suspense, useState } from 'react';
import { CommonPageStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/CommonPageStyles';
import Classification from '@/views/musicSection/views/RightViews/OnlineMusic/components/Classification';
import { shallowEqual, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

/**
 * @description: 音乐馆、视频的公共主页面
 */
const OnlineCommonPage = () => {
	const { curMenu, fullScreenPlayer, maxPlayer } = useSelector(
		(state) => ({
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
			maxPlayer: state.musicApp.maxPlayer,
			curMenu: state.musicApp.curMenu,
		}),
		shallowEqual,
	);
	const [curSort, setCurSort] = useState({}); // 默认选中的标题分类
	const navigate = useNavigate();

	// 切换音乐馆、视频页面的分类显示
	const changeSort = (sortItem) => {
		setCurSort(sortItem);
		navigate(`/music${curMenu.routePath}${sortItem.routePath}`);
	};

	return (
		<CommonPageStyles style={fullScreenPlayer || maxPlayer ? { padding: '10px 15% 0 15%' } : {}}>
			{/* 分类选择、路由跳转 */}
			<Classification changeSort={changeSort} curSort={curSort}></Classification>
			{/* 页面路由占位 */}
			<div className='song-container'>
				<Suspense>
					<Outlet></Outlet>
				</Suspense>
			</div>
		</CommonPageStyles>
	);
};

export default memo(OnlineCommonPage);
