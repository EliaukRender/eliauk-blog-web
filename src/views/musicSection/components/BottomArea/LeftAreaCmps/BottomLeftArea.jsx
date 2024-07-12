import React, { memo } from 'react';
import { BottomLeftAreaStyles } from '@/views/musicSection/styles/BottomLeftAreaStyles';
import FeatListPopover from '@/views/musicSection/components/BottomArea/LeftAreaCmps/FeatListPopover';

const BottomLeftArea = () => {
	return (
		<BottomLeftAreaStyles>
			<img className='music-pic' src={require('@/views/musicSection/images/music-info.png')} alt='' />
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
