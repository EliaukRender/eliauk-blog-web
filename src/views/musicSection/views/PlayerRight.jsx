import React, { memo, Suspense } from 'react';
import { PlayerRightStyles } from '@/views/musicSection/styles/PlayerRightStyles';
import { Outlet } from 'react-router-dom';

const PlayerRight = () => {
	return (
		<PlayerRightStyles>
			<Suspense>
				{/* 路由占位符 */}
				<Outlet></Outlet>
			</Suspense>
		</PlayerRightStyles>
	);
};

export default memo(PlayerRight);
