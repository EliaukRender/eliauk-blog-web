import React, { memo } from 'react';
import MenuMusicInfoArea from '@/views/eliaukMusic/views/RightViews/MySheet/components/MusicListInfo';
import { CommonPageStyles } from '@/views/eliaukMusic/views/RightViews/MySheet/styles/CommonPageStyles';
import MusicList from '@/views/eliaukMusic/views/RightViews/MySheet/components/MusicList';

/**
 * @description: 我的所有歌单的---公共主页面
 */
const SheetCommonPage = () => {
	return (
		<CommonPageStyles>
			{/* 歌单信息介绍 */}
			<MenuMusicInfoArea></MenuMusicInfoArea>
			{/* 歌单区域 */}
			<MusicList></MusicList>
		</CommonPageStyles>
	);
};

export default memo(SheetCommonPage);
