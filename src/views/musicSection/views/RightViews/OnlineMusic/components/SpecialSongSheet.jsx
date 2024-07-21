import React, { memo } from 'react';
import { SpecialSongSheetStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/SpecialSongSheetStyles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { music_green_select } from '@/assets/css/variables';
import { useDynamicImagesList } from '@/views/musicSection/hooks/useDynamicImagesList';
import PropTypes from 'prop-types';

/**
 * @description: 精选歌单--轮播图形式推荐
 */
const SpecialSongSheet = ({ sheetList = [] }) => {
	const SHOW_IMAGES_NUM = 3; // 可配置，可视区域展示图片的数量
	const {
		containerRef,
		width,
		height,
		onMouseEnter,
		onMouseLeave,
		handleNext,
		handlePre,
		controls,
		activePointerList,
	} = useDynamicImagesList({
		showImagesNum: SHOW_IMAGES_NUM,
		showActivePointer: true,
		imagesLength: sheetList.length,
		marginRightValue: 20,
	});

	return (
		<SpecialSongSheetStyles
			height={height}
			onMouseEnter={() => {
				onMouseEnter();
			}}
			onMouseLeave={() => {
				onMouseLeave();
			}}>
			{/* 轮播图 */}
			<div className='images-box' ref={containerRef}>
				{sheetList.map((sheet) => {
					return <img className='img' style={{ width: width }} src={sheet.sheetImage} />;
				})}
			</div>
			{/* 左、右切换按钮 */}
			<motion.div className='next' initial={{ opacity: 0 }} animate={controls} onClick={handleNext}>
				<RightOutlined />
			</motion.div>
			<motion.div className='prev' initial={{ opacity: 0 }} animate={controls} onClick={handlePre}>
				<LeftOutlined />
			</motion.div>
			{/* 指示器 */}
			<div className='pointer-list'>
				{sheetList.map((item, index) => {
					return (
						<div
							className='pointer'
							style={activePointerList.includes(index) ? { backgroundColor: music_green_select } : {}}></div>
					);
				})}
			</div>
		</SpecialSongSheetStyles>
	);
};

SpecialSongSheet.propTypes = {
	sheetList: PropTypes.array,
};

export default memo(SpecialSongSheet);
