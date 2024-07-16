import React, { Fragment, memo, useState } from 'react';
import { Popover } from 'antd';
import { MoveMusicStyles } from '@/views/musicSection/styles/MoveMusicStyles';
import { myMusicMenuList } from '@/views/musicSection/constant';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description: 移动歌曲到其他列表
 */
const MoveMusicPopover = ({ showMode = true }) => {
	const [open, setOpen] = useState(false);

	// 打开/隐藏弹窗
	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	return (
		<MoveMusicStyles>
			<Popover
				overlayClassName='move-music-popover'
				content={
					<Fragment>
						{/* 浮窗内容 */}
						{myMusicMenuList.map((item) => {
							return (
								<div
									key={item.id}
									className='move-item'
									onClick={() => {
										setOpen(false);
										console.log('添加到', item.id);
									}}>
									<i className={classNames('iconfont', item.icon)}></i>
									<div>{item.name}</div>
								</div>
							);
						})}
					</Fragment>
				}
				placement='right'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				{/* 图标+文字组合时触发浮窗 */}
				{showMode && (
					<div className='feat-item-has-arrow'>
						<div className='feat-item'>
							<i className='iconfont icon-tianjia'></i>
							<div>添加到</div>
						</div>
						<i className='iconfont icon-youjiantou'></i>
					</div>
				)}
				{/* 图标触发浮窗 */}
				{!showMode && <i className='iconfont icon-tianjia1'></i>}
			</Popover>
		</MoveMusicStyles>
	);
};

MoveMusicPopover.propTypes = {
	showMode: PropTypes.bool, // true--文字+图标组合触发； false--仅有图标时触发
};

export default memo(MoveMusicPopover);
