import React, { memo } from 'react';
import { BottomLeftAreaStyles } from '@/views/musicSection/styles/BottomLeftAreaStyles';
import FeatListPopover from '@/views/musicSection/components/BottomArea/LeftAreaCmps/FeatListPopover';

import MusicMiniPicture from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MusicMiniPicture';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 播放器底部左侧区域
 */
const BottomLeftArea = () => {
	const { showFullScreenLyric } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
		}),
		shallowEqual,
	);

	return (
		<BottomLeftAreaStyles style={showFullScreenLyric ? { background: 'linear-gradient(to right, #404647 0%, #404647 100%)' } : {}}>
			{/* 歌曲封面 */}
			<MusicMiniPicture></MusicMiniPicture>
			{/* 歌曲信息 */}
			<div className='info-text'>
				<div className='singer'>歌手名</div>
				<div className='song-name'>歌名</div>
			</div>
			<div className='feat-area'>
				{/* 喜欢这首歌 */}
				<img className='heart' src={require('@/views/musicSection/images/icons/heart.png')} alt='' />
				{/* 操作功能列表浮窗 */}
				<FeatListPopover></FeatListPopover>
			</div>
		</BottomLeftAreaStyles>
	);
};

export default memo(BottomLeftArea);
