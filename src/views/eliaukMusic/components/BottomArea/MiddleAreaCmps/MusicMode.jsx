import React, { Fragment, memo, useState } from 'react';
import { MusicModeStyles } from '@/views/eliaukMusic/styles/MusicModeStyles';
import { Popover } from 'antd';
import classNames from 'classnames';
import { changeMusicMode } from '@/views/eliaukMusic/store/actions/audioAction';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * @description: 音乐播放模式：随机播放、顺序播放、单曲循环
 */
const MusicMode = ({ hover }) => {
	const [open, setOpen] = useState(false);
	const [curModeIcon, setCurModeIcon] = useState('icon-shunxubofang');
	const modeList = [
		{ mode: 1, name: '顺序播放', icon: 'icon-shunxubofang' },
		{ mode: 2, name: '随机播放', icon: 'icon-suijibofang' },
		{ mode: 3, name: '单曲循环', icon: 'icon-danquxunhuan' },
	];

	// 打开音量浮窗
	const handleOpenChange = (newOpen) => {
		setOpen(newOpen);
	};

	// 点击模式图标
	const handleClick = (item) => {
		setCurModeIcon(item.icon);
		setOpen(false);
		changeMusicMode(item.mode);
	};

	return (
		<MusicModeStyles>
			<Popover
				overlayClassName='music-mode-popover'
				content={
					<Fragment>
						{modeList.map((item) => {
							return (
								<div
									key={item.mode}
									className='mode-item'
									onClick={() => {
										handleClick(item);
									}}>
									<i className={classNames('iconfont', item.icon)}></i>
									<div>{item.name}</div>
								</div>
							);
						})}
					</Fragment>
				}
				placement='top'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<motion.i
					className={classNames('iconfont', curModeIcon, open ? 'icon-active' : '')}
					initial={{ opacity: 0 }}
					animate={hover || open ? { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } } : {}}></motion.i>
			</Popover>
		</MusicModeStyles>
	);
};

MusicMode.propTypes = {
	hover: PropTypes.bool, // 鼠标进入到控制按钮区域
};

export default memo(MusicMode);
