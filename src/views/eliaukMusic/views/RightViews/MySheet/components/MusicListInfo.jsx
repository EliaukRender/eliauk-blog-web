import React, { memo, useMemo } from 'react';
import { MusicListInfoStyles } from '@/views/eliaukMusic/views/RightViews/MySheet/styles/MusicListInfoStyles';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 菜单对应的歌单信息
 */
const MusicListInfo = ({ onlineSheetInfo = {} }) => {
	const { curSheet } = useSelector(
		(state) => ({
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);

	// 是否是 在线歌单
	const isOnlineSheet = useMemo(() => {
		const list = Object.keys(onlineSheetInfo || {});
		return !!list?.length;
	}, [onlineSheetInfo]);

	// 歌单信息: 我的自建歌单 或 在线音乐歌单
	const curSheetInfo = useMemo(() => {
		return isOnlineSheet ? onlineSheetInfo : curSheet;
	}, [isOnlineSheet, onlineSheetInfo, curSheet]);

	return (
		<MusicListInfoStyles>
			<div className='top-common-area'>
				<img
					className='menu-image'
					src={
						curSheetInfo?.sheetCover ||
						curSheetInfo?.sheetImage ||
						require('@/views/eliaukMusic/images/changpianji.png')
					}
					alt=''
				/>
				<div className='menu-info'>
					<div className='menu-name'>
						<div className='title'>{curSheetInfo?.sheetName}</div>
						<div className='edit'>
							<i className='iconfont icon-bianji'></i>
							<span>编辑</span>
						</div>
					</div>
					<div className='menu-intro'>{curSheetInfo?.sheetInfo || curSheetInfo?.sheetDesc}</div>
					<div className='operation'>
						<div className='btn'>
							<i className='iconfont icon-bofang'></i>播放
						</div>
						<div className='btn'>
							<i className='iconfont icon-xiazai'></i>下载
						</div>
						<div className='btn'>
							<i className='iconfont icon-fenxiang'></i>分享
						</div>
					</div>
				</div>
			</div>
		</MusicListInfoStyles>
	);
};

export default memo(MusicListInfo);
