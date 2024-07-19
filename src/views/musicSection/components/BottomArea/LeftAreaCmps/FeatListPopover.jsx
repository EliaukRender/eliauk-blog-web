import React, { Fragment, memo, useState } from 'react';
import classNames from 'classnames';
import { Popover } from 'antd';
import DoubleSpeed from '@/views/musicSection/components/BottomArea/LeftAreaCmps/DoubleSpeedPopover';
import MoveMusic from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MoveMusicPopover';
import { FeatListPopoverStyles } from '@/views/musicSection/styles/FeatListPopoverStyles';
import { deleteSongFromSongList } from '@/views/musicSection/store/actions/audioAction';
import PropTypes from 'prop-types';

/**
 * @description: 特色功能
 */
const FeatListPopover = ({ songId }) => {
	const [open, setOpen] = useState(false);

	// 打开功能操作浮窗
	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	// 从播放列表删除
	const handleDeleteSong = async () => {
		await deleteSongFromSongList(songId);
	};

	return (
		<FeatListPopoverStyles>
			<Popover
				overlayClassName='music-feat-popover'
				content={
					<Fragment>
						{/* 倍速调节浮窗 */}
						<DoubleSpeed></DoubleSpeed>
						{/* 添加到其他列表的浮窗 */}
						<MoveMusic isSongList={false}></MoveMusic>
						{/* 播放MV */}
						{false && (
							<div className='feat-item'>
								<i className='iconfont icon-video'></i>
								<div>播放MV</div>
							</div>
						)}
						{/* 从列表删除 */}
						<div
							className='feat-item'
							onClick={() => {
								handleDeleteSong();
							}}>
							<i className='iconfont icon-shanchu'></i>
							<div>从播放列表删除</div>
						</div>
					</Fragment>
				}
				placement='top'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<i className={classNames('iconfont', 'icon-shenglve', open ? 'icon-shenglve-active' : '')}></i>
			</Popover>
		</FeatListPopoverStyles>
	);
};

FeatListPopover.propTypes = {
	FeatListPopover: PropTypes.number, // 当前歌曲id
};

export default memo(FeatListPopover);
