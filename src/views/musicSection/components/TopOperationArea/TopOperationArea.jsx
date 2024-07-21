import React, { memo } from 'react';
import { TopOperationAreaStyles } from '@/views/musicSection/components/TopOperationArea/TopOperationAreaStyles';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setFullScreenPlayer, setMaxPlayer, setMiniPlayer } from '@/views/musicSection/store/modules/musicAppReducer';

/**
 * @description:顶部操作栏
 */
const TopOperationArea = () => {
	const dispatch = useDispatch();
	const { fullScreenPlayer, miniPlayer, maxPlayer } = useSelector(
		(state) => ({
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
			maxPlayer: state.musicApp.maxPlayer,
		}),
		shallowEqual,
	);

	return (
		<TopOperationAreaStyles>
			<div className='left'>
				<i className='iconfont icon-zuojiantou'></i>
				<i className='iconfont icon-youjiantou'></i>
				<Input rootClassName={'input-search-music'} placeholder='搜索音乐' prefix={<SearchOutlined />} />
			</div>
			<div className='right'>
				<img className='img' src={require('@/assets/image/logo.jpg')} alt='' />
				<div className='username'>EliaukRender</div>
				<i className='iconfont icon-pifu'></i>
				<i className='iconfont icon-shangchuan'></i>
				<i
					className='iconfont icon-zuixiaohua'
					onClick={() => {
						dispatch(setMiniPlayer(true));
					}}></i>
				{/* 最大化 */}
				{!maxPlayer && (
					<i
						className='iconfont icon-zuidahua'
						onClick={() => {
							if (fullScreenPlayer) {
								return;
							}
							dispatch(setMaxPlayer(true));
						}}></i>
				)}
				{/* 退出最大化 */}
				{maxPlayer && (
					<i
						className='iconfont icon-exitfullscreen'
						onClick={() => {
							if (fullScreenPlayer) {
								return;
							}
							dispatch(setMaxPlayer(false));
						}}></i>
				)}
				{/* 全屏 */}
				{!fullScreenPlayer && (
					<i
						className='iconfont icon-quanping'
						onClick={() => {
							dispatch(setFullScreenPlayer(true));
						}}></i>
				)}
				{/* 退出全屏 */}
				{fullScreenPlayer && (
					<i
						className='iconfont icon-tuichuquanping'
						onClick={() => {
							dispatch(setFullScreenPlayer(false));
						}}></i>
				)}
			</div>
		</TopOperationAreaStyles>
	);
};

export default memo(TopOperationArea);
