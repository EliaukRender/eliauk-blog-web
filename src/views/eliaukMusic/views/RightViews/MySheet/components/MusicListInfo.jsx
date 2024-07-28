import React, { memo } from 'react';
import { MusicListInfoStyles } from '@/views/eliaukMusic/views/RightViews/MySheet/styles/MusicListInfoStyles';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 菜单对应的歌单信息
 */
const MusicListInfo = () => {
	const { curSheet } = useSelector(
		(state) => ({
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);

	return (
		<MusicListInfoStyles>
			<div className='top-common-area'>
				<img
					className='menu-image'
					src={curSheet?.sheetCover || require('@/views/eliaukMusic/images/changpianji.png')}
					alt=''
				/>
				<div className='menu-info'>
					<div className='menu-name'>
						<div className='title'>{curSheet?.sheetName}</div>
						<div className='edit'>
							<i className='iconfont icon-bianji'></i>
							<span>编辑</span>
						</div>
					</div>
					<div className='menu-intro'>{curSheet?.sheetInfo}</div>
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
