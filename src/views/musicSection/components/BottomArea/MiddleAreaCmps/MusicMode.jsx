import React, { Fragment, memo, useState } from 'react';
import { MusicModeStyles } from '@/views/musicSection/styles/MusicModeStyles';
import { Popover } from 'antd';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeMusicMode } from '@/views/musicSection/store/actions/audioAction';

/**
 * @description: 音乐播放模式：随机播放、顺序播放、单曲循环
 */
const MusicMode = () => {
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
										setCurModeIcon(item.icon);
										setOpen(false);
										changeMusicMode(item.mode);
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
				<i className={classNames('iconfont', curModeIcon, open ? 'icon-active' : '')}></i>
			</Popover>
		</MusicModeStyles>
	);
};

export default memo(MusicMode);
