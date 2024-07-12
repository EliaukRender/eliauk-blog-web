import React, { Fragment, memo, useState } from 'react';
import { Popover } from 'antd';
import { MoveMusicStyles } from '@/views/musicSection/styles/MoveMusicStyles';
import { myMusicMenuList } from '@/views/musicSection/constant';
import classNames from 'classnames';

/**
 * @description: 移动歌曲到其他列表
 */
const MoveMusicPopover = () => {
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
				{/* 触发浮窗的根元素 */}
				<div className='feat-item-has-arrow'>
					<div className='feat-item'>
						<i className='iconfont icon-tianjia'></i>
						<div>添加到</div>
					</div>
					<i className='iconfont icon-youjiantou'></i>
				</div>
			</Popover>
		</MoveMusicStyles>
	);
};

export default memo(MoveMusicPopover);
