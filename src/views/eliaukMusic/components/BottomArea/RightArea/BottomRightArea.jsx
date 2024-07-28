import React, { memo } from 'react';
import { BottomRightAreaStyles } from '@/views/eliaukMusic/styles/BottomRightAreaStyles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
	setDrawerContentId,
	setDrawerVisible,
	setShowFullScreenLyric,
} from '@/views/eliaukMusic/store/modules/musicAppReducer';
import { music_green } from '@/assets/css/variables';

const BottomRightArea = () => {
	const dispatch = useDispatch();
	const { showFullScreenLyric, drawerVisible, drawerContentId } = useSelector(
		(state) => ({
			showFullScreenLyric: state.musicApp.showFullScreenLyric,
			drawerVisible: state.musicApp.drawerVisible,
			drawerContentId: state.musicApp.drawerContentId,
		}),
		shallowEqual,
	);

	return (
		<BottomRightAreaStyles
			style={
				showFullScreenLyric ? { background: 'linear-gradient(to right, #343838 0%, #202021 50%, #1a1a1a 100%)' } : {}
			}>
			{/* 打开选择频谱图的抽屉 */}
			<i
				className='iconfont icon-pinpu'
				style={drawerVisible && drawerContentId === 1 ? { color: music_green } : {}}
				onClick={() => {
					dispatch(setDrawerVisible(true));
					dispatch(setDrawerContentId(1)); // 1-频谱选择
				}}></i>
			{/* 打开全屏歌词 */}
			<i
				className='iconfont icon-ci'
				style={showFullScreenLyric ? { color: music_green } : {}}
				onClick={() => {
					dispatch(setShowFullScreenLyric(!showFullScreenLyric));
				}}></i>
			{/* 打开当前播放列表 */}
			<i
				className='iconfont icon-zhankai'
				style={drawerVisible && drawerContentId === 2 ? { color: music_green } : {}}
				onClick={() => {
					dispatch(setDrawerVisible(true));
					dispatch(setDrawerContentId(2)); // 2-歌曲列表
				}}></i>
		</BottomRightAreaStyles>
	);
};

export default memo(BottomRightArea);
