import React, { Fragment, memo, useState } from 'react';
import { Popover } from 'antd';
import { MoveMusicStyles } from '@/views/musicSection/styles/MoveMusicStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { handleMoveSongToSheet } from '@/views/musicSection/store/actions/musicAppAction';

/**
 * @description: 移动歌曲到其他列表
 */
const MoveMusicPopover = ({ isSongList = true, curSong }) => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const { sheetList, curSheet, songId } = useSelector(
		(state) => ({
			sheetList: state.musicApp.sheetList,
			songId: state.audio.songId,
			curSheet: state.musicApp.curSheet,
		}),
		shallowEqual,
	);

	// 打开/隐藏弹窗
	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	// 添加歌曲到其他歌单
	const addSongToOtherSheet = async (curSong, sheetId) => {
		await handleMoveSongToSheet({ curSong, sheetId });
	};

	return (
		<MoveMusicStyles>
			<Popover
				overlayClassName='move-music-popover'
				content={
					<Fragment>
						{/* 浮窗内容 */}
						{sheetList?.map((item) => {
							return (
								<div
									key={item.sheetId}
									className='move-item'
									onClick={() => {
										setOpen(false);
										addSongToOtherSheet(curSong, item.sheetId);
									}}>
									<i className={classNames('iconfont', item.sheetIcon)}></i>
									<div>{item.sheetName}</div>
								</div>
							);
						})}
					</Fragment>
				}
				placement={isSongList ? 'left' : 'right'}
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				{/* 图标+文字组合时触发浮窗 */}
				{!isSongList && (
					<div className='feat-item-has-arrow'>
						<div className='feat-item'>
							<i className='iconfont icon-tianjia'></i>
							<div>添加到</div>
						</div>
						<i className='iconfont icon-youjiantou'></i>
					</div>
				)}
				{/* 图标触发浮窗 */}
				{isSongList && <i className='iconfont icon-tianjia1' title='添加到'></i>}
			</Popover>
		</MoveMusicStyles>
	);
};

MoveMusicPopover.propTypes = {
	isSongList: PropTypes.bool, // true--表示位于歌曲列表页面； false--表示位于底部FeatListOver操作浮窗中
	curSong: PropTypes.object, // 在歌曲列表中的时候，外部传进来的当前歌曲
};

export default memo(MoveMusicPopover);
