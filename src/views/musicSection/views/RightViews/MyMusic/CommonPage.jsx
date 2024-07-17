import React, { memo } from 'react';
import MenuMusicInfoArea from '@/views/musicSection/views/RightViews/MyMusic/components/MusicListInfo';
import { CommonPageStyles } from '@/views/musicSection/views/RightViews/MyMusic/styles/CommonPageStyles';
import MusicList from '@/views/musicSection/views/RightViews/MyMusic/components/MusicList';
import { usePageTransformAnimate } from '@/views/musicSection/hooks/usePageTransformAnimate';

/**
 * @description: 我的音乐---公共页面
 */
const CommonPage = () => {
	const { playAnimation } = usePageTransformAnimate();

	return (
		<CommonPageStyles key={playAnimation} className='common-page'>
			{/* 歌单信息介绍 */}
			<MenuMusicInfoArea></MenuMusicInfoArea>
			{/* 歌单区域 */}
			<MusicList></MusicList>
		</CommonPageStyles>
	);
};

export default memo(CommonPage);
