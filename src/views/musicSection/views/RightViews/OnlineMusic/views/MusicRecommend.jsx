import React, { memo } from 'react';
import SpecialSheet from '@/views/musicSection/views/RightViews/OnlineMusic/components/SpecialSongSheet';
import { MusicRecommendStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/MusicRecommendStyles';
import NormalSongSheet from '@/views/musicSection/views/RightViews/OnlineMusic/components/NormalSongSheet';

/**
 * @description: 音乐精选
 */
const MusicRecommend = () => {
	return (
		<MusicRecommendStyles>
			{/* 轮播图推荐歌单区域 */}
			<SpecialSheet></SpecialSheet>
			{/* 分类歌单区域 */}
			<NormalSongSheet></NormalSongSheet>
		</MusicRecommendStyles>
	);
};

export default memo(MusicRecommend);
