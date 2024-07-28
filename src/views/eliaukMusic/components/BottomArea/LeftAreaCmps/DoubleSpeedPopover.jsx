import React, { Fragment, memo, useState } from 'react';
import { Popover } from 'antd';
import { DoubleSpeedStyles } from '@/views/eliaukMusic/styles/DoubleSpeedStyles';
import { changePlaybackRate } from '@/views/eliaukMusic/store/actions/audioAction';
import { shallowEqual, useSelector } from 'react-redux';

/**
 * @description: 倍速调节的浮窗
 */
const DoubleSpeedPopover = () => {
	const speedList = [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0]; // 倍速列表
	const [open, setOpen] = useState(false);

	const { playbackRate } = useSelector(
		(state) => ({
			playbackRate: state.audio.playbackRate,
		}),
		shallowEqual,
	);

	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	return (
		<DoubleSpeedStyles>
			<Popover
				overlayClassName='double-speed-popover'
				content={
					<Fragment>
						{speedList.map((item) => {
							return (
								<div
									key={item}
									className='speed-item'
									onClick={() => {
										setOpen(false);
										changePlaybackRate(item);
									}}>
									<div>{item}</div>
									{playbackRate === item && <i className='iconfont icon-duigou' style={{ color: '#00cc65' }}></i>}
								</div>
							);
						})}
					</Fragment>
				}
				placement='right'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<div className='feat-item-has-arrow'>
					<div className='feat-item'>
						<i className='iconfont icon-beisu'></i>
						<div>倍速</div>
					</div>
					<i className='iconfont icon-youjiantou'></i>
				</div>
			</Popover>
		</DoubleSpeedStyles>
	);
};

export default memo(DoubleSpeedPopover);
