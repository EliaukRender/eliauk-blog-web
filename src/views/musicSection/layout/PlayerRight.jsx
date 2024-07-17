import React, { memo, Suspense, useEffect } from 'react';
import { PlayerRightStyles } from '@/views/musicSection/styles/PlayerRightStyles';
import { Outlet, useLocation } from 'react-router-dom';
import TopOperationArea from '@/views/musicSection/components/TopOperationArea/TopOperationArea';

const PlayerRight = () => {
	const location = useLocation();

	useEffect(() => {}, [location]);

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
