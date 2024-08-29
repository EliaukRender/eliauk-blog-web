import React, { memo, useEffect, useState } from 'react';
import SpecialSheet from '@/views/eliaukMusic/views/RightViews/OnlineMusic/components/SpecialSongSheet';
import { MusicRecommendStyles } from '@/views/eliaukMusic/views/RightViews/OnlineMusic/styles/MusicRecommendStyles';
import NormalSongSheet from '@/views/eliaukMusic/views/RightViews/OnlineMusic/components/NormalSongSheet';
import { handleQueryMusicHomeSheet } from '@/views/eliaukMusic/store/actions/musicAppAction';
import { useNavigate } from 'react-router-dom';

/**
 * @description: 音乐精选
 */
const MusicRecommend = () => {
	const [totalSheetList, setTotalSheetList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		getSheetListData();
	}, []);

	// 获取音乐馆-精选页面的所有歌单
	const getSheetListData = async () => {
		const list = await handleQueryMusicHomeSheet();
		setTotalSheetList(list);
	};

	// 前往 在线歌单 的 歌单详情 页面
	const goToSheetDetail = (sheetInfo) => {
		navigate('/music/onlineSheetDetail', {
			state: sheetInfo,
		});
	};

	return (
		<MusicRecommendStyles>
			{/* 轮播图推荐歌单区域   collectionId值为1  */}
			<SpecialSheet
				sheetList={totalSheetList.find((item) => item.collectionId === 1)?.grouped_data}
				goToSheetDetail={goToSheetDetail}></SpecialSheet>
			{/* 分类歌单区域   collectionId值不为1  */}
			{totalSheetList
				.filter((item) => item.collectionId !== 1)
				.map((item) => {
					return (
						<NormalSongSheet
							sheetList={item?.grouped_data || []}
							title={item?.collectionName || ''}
							goToSheetDetail={goToSheetDetail}></NormalSongSheet>
					);
				})}
		</MusicRecommendStyles>
	);
};

export default memo(MusicRecommend);
