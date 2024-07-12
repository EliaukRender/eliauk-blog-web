import React, { Fragment, memo, useState } from 'react';
import classNames from 'classnames';
import { Popover } from 'antd';
import DoubleSpeed from '@/views/musicSection/components/BottomArea/LeftAreaCmps/DoubleSpeedPopover';
import MoveMusic from '@/views/musicSection/components/BottomArea/LeftAreaCmps/MoveMusicPopover';
import { FeatListPopoverStyles } from '@/views/musicSection/styles/FeatListPopoverStyles';

/**
 * @description: 特色功能
 */
const FeatListPopover = () => {
	const [open, setOpen] = useState(false);

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
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
						<MoveMusic></MoveMusic>
						{/* 播放MV */}
						<div className='feat-item'>
							<i className='iconfont icon-video'></i>
							<div>播放MV</div>
						</div>
						{/* 从列表删除 */}
						<div className='feat-item'>
							<i className='iconfont icon-shanchu'></i>
							<div>从列表删除</div>
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

export default memo(FeatListPopover);
