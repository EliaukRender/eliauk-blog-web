import React, { memo, useEffect, useState } from 'react';
import SpecialSheet from '@/views/musicSection/views/RightViews/OnlineMusic/components/SpecialSongSheet';
import { MusicRecommendStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/MusicRecommendStyles';
import NormalSongSheet from '@/views/musicSection/views/RightViews/OnlineMusic/components/NormalSongSheet';
import { handleQueryMusicHomeSheet } from '@/views/musicSection/store/actions/musicAppAction';

/**
 * @description: 音乐精选
 */
const MusicRecommend = () => {
	const [totalSheetList, setTotalSheetList] = useState([]);

	useEffect(() => {
		getSheetListData();
	}, []);

	// 获取音乐馆-精选页面的所有歌单
	const getSheetListData = async () => {
		const list = await handleQueryMusicHomeSheet();
		setTotalSheetList(list);
	};

	return (
		<MusicRecommendStyles>
			{/* 轮播图推荐歌单区域   collectionId值为1  */}
			<SpecialSheet sheetList={totalSheetList.find((item) => item.collectionId === 1)?.grouped_data}></SpecialSheet>
			{/* 分类歌单区域   collectionId值不为1  */}
			{totalSheetList
				.filter((item) => item.collectionId !== 1)
				.map((item) => {
					return (
						<NormalSongSheet sheetList={item?.grouped_data || []} title={item?.collectionName || ''}></NormalSongSheet>
					);
				})}
		</MusicRecommendStyles>
	);
};

export default memo(MusicRecommend);
