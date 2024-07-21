import React, { memo } from 'react';
import { NormalSongSheetStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/NormalSongSheetStyles';
import SheetCard from '@/views/musicSection/views/RightViews/OnlineMusic/components/SheetCard';
import { useDynamicImagesList } from '@/views/musicSection/hooks/useDynamicImagesList';
import { motion } from 'framer-motion';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

/**
 * @description: 普通推荐歌单 列表显示组件
 */
const NormalSongSheet = () => {
	const sheetList = [
		{ id: 1, imageNum: 1 },
		{ id: 2, imageNum: 2 },
		{ id: 3, imageNum: 3 },
		{ id: 4, imageNum: 4 },
		{ id: 5, imageNum: 5 },
		{ id: 6, imageNum: 6 },
		{ id: 7, imageNum: 7 },
		{ id: 8, imageNum: 8 },
	];
	const SHOW_IMAGES_NUM = 6; // 可配置，可视区域展示图片的数量
	const { containerRef, width, height, onMouseEnter, onMouseLeave, handleNext, handlePre, controls } =
		useDynamicImagesList(SHOW_IMAGES_NUM, false, sheetList.length);

	return (
		<NormalSongSheetStyles
			height={height}
			onMouseEnter={() => {
				onMouseEnter();
			}}
			onMouseLeave={() => {
				onMouseLeave();
			}}>
			{/* 标题 */}
			<div className='song-sheet-title'>精选歌单</div>
			{/* 歌单列表 */}
			<div className='sheet-list' ref={containerRef}>
				{sheetList?.map((sheetInfo) => {
					return <SheetCard sheetInfo={sheetInfo} imageNum={sheetInfo.imageNum} imageWidth={width}></SheetCard>;
				})}
			</div>
			{/* 左、右切换按钮 */}
			<motion.div className='next' initial={{ opacity: 0 }} animate={controls} onClick={handleNext}>
				<RightOutlined />
			</motion.div>
			<motion.div className='prev' initial={{ opacity: 0 }} animate={controls} onClick={handlePre}>
				<LeftOutlined />
			</motion.div>
		</NormalSongSheetStyles>
	);
};

export default memo(NormalSongSheet);
