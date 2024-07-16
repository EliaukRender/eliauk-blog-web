import React, { Fragment, memo, useState } from 'react';
import { Popover } from 'antd';
import { MoveMusicStyles } from '@/views/musicSection/styles/MoveMusicStyles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 移动歌曲到其他列表
 */
const MoveMusicPopover = ({ showMode = true }) => {
	const [open, setOpen] = useState(false);
	const { menuList } = useSelector(
		(state) => ({
			menuList: state.musicApp.menuList,
		}),
		shallowEqual,
	);

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
						{menuList
							?.filter((menu) => menu.menuType === 1)
							?.map((item) => {
								return (
									<div
										key={item.menuId}
										className='move-item'
										onClick={() => {
											setOpen(false);
											console.log('添加到', item.menuName);
										}}>
										<i className={classNames('iconfont', item.menuIcon)}></i>
										<div>{item.menuName}</div>
									</div>
								);
							})}
					</Fragment>
				}
				placement={!showMode ? 'left' : 'right'}
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
