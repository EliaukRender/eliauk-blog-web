import React, { memo, Suspense } from 'react';
import { PlayerRightStyles } from '@/views/eliaukMusic/styles/PlayerRightStyles';
import { Outlet } from 'react-router-dom';
import TopOperationArea from '@/views/eliaukMusic/components/TopOperationArea/TopOperationArea';

/**
 * @description: 播放器右侧整体区域
 */
const PlayerRight = () => {
	return (
		<PlayerRightStyles>
			<div className='container'>
				{/* 顶部操作栏 */}
				<TopOperationArea></TopOperationArea>
				{/* 路由页面 */}
				<Suspense>
					{/* 路由占位符 */}
					<Outlet></Outlet>
				</Suspense>
			</div>
		</PlayerRightStyles>
	);
};

export default memo(PlayerRight);
