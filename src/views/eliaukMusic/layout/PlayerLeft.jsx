import React, { memo } from 'react';
import { PlayerLeftStyles } from '@/views/eliaukMusic/styles/PlayerLeftStyles';
import LeftMenuList from '@/views/eliaukMusic/components/LeftMenu/LeftMenuList';
import LeftSheetList from '@/views/eliaukMusic/components/LeftMenu/LeftSheetList';

/**
 * @description: 播放器主界面左侧区域
 */
const PlayerLeft = () => {
	return (
		<PlayerLeftStyles>
			{/* logo区域 */}
			<div className='logo-area'>
				<img src={require('@/views/eliaukMusic/images/music-logo.png')} alt='' />
				<span className='logo-title'>Eliauk音乐</span>
			</div>
			{/* 在线音乐 */}
			<LeftMenuList></LeftMenuList>
			{/* 我的歌单 */}
			<LeftSheetList></LeftSheetList>
		</PlayerLeftStyles>
	);
};

export default memo(PlayerLeft);
