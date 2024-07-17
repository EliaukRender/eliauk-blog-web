import React, { memo, useState } from 'react';
import { CommonPageStyles } from '@/views/musicSection/views/RightViews/OnlineMusic/styles/CommonPageStyles';
import Classification from '@/views/musicSection/views/RightViews/OnlineMusic/components/Classification';
import { usePageTransformAnimate } from '@/views/musicSection/hooks/usePageTransformAnimate';
import GoodSongList from '@/views/musicSection/views/RightViews/OnlineMusic/components/GoodSongList';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 音乐馆、视频页面
 */
const CommonPage = () => {
	const { fullScreenPlayer, maxPlayer } = useSelector(
		(state) => ({
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
			maxPlayer: state.musicApp.maxPlayer,
		}),
		shallowEqual,
	);
	const { playAnimation } = usePageTransformAnimate();
	const [curTitleId, setCurTitleId] = useState(1); // 默认选中精选

	// 切换title
	const changeTitleId = (id) => {
		setCurTitleId(id);
	};

	return (
		<CommonPageStyles key={playAnimation} style={fullScreenPlayer || maxPlayer ? { padding: '10px 200px 0 200px' } : {}}>
			<Classification changeTitleId={changeTitleId} curTitleId={curTitleId}></Classification>
			<div className='song-container'>
				<GoodSongList></GoodSongList>
			</div>
		</CommonPageStyles>
	);
};

export default memo(CommonPage);
