import React, { memo } from 'react';
import { NormalSongSheetStyles } from '@/views/eliaukMusic/views/RightViews/OnlineMusic/styles/NormalSongSheetStyles';
import SheetCard from '@/views/eliaukMusic/views/RightViews/OnlineMusic/components/SheetCard';
import { useDynamicImagesList } from '@/views/eliaukMusic/hooks/useDynamicImagesList';
import { motion } from 'framer-motion';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

/**
 * @description: 普通推荐歌单 列表显示组件
 */
const NormalSongSheet = ({ title = '', sheetList = [], goToSheetDetail }) => {
	const SHOW_IMAGES_NUM = 6; // 可配置，可视区域展示图片的数量
	const { containerRef, width, height, onMouseEnter, onMouseLeave, handleNext, handlePre, controls } =
		useDynamicImagesList({
			showImagesNum: SHOW_IMAGES_NUM,
			showActivePointer: false,
			imagesLength: sheetList.length,
			marginRightValue: 20,
		});

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
			<div className='song-sheet-title'>{title}</div>
			{/* 歌单列表 */}
			<div className='sheet-list' ref={containerRef}>
				{sheetList?.map((sheetInfo) => {
					return (
						<SheetCard
							sheetInfo={sheetInfo}
							sheetImage={sheetInfo.sheetImage}
							imageWidth={width}
							goToSheetDetail={goToSheetDetail}></SheetCard>
					);
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

NormalSongSheet.propTypes = {
	title: PropTypes.string,
	sheetList: PropTypes.array,
	goToSheetDetail: PropTypes.func,
};

export default memo(NormalSongSheet);
