import React, { memo, useEffect, useRef, useState } from 'react';
import SpecialSheet from '@/views/musicSection/views/RightViews/OnlineMusic/components/SpecialSheet';
import { MusicRecommendStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/MusicRecommendStyles';

/**
 * @description: 音乐精选
 */
const MusicRecommend = () => {
	return (
		<MusicRecommendStyles>
			{/* 轮播图推荐歌单区域 */}
			<SpecialSheet></SpecialSheet>
			{/* 分类歌单区域 */}
		</MusicRecommendStyles>
	);
};

export default memo(MusicRecommend);
