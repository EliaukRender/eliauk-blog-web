import React, { Fragment, memo, useState } from 'react';
import { ConfigProvider, Divider, Popover, Slider } from 'antd';
import { SoundOutlined } from '@ant-design/icons';
import { shallowEqual, useSelector } from 'react-redux';
import { changeVolume } from '@/views/musicSection/store/actions/audioAction';
import { VolumeAdjusterStyles } from '@/views/musicSection/styles/VolumeAdjusterStyles';
import classNames from 'classnames';

/**
 * @description: 音量调节器
 */
const VolumeAdjuster = () => {
	const [open, setOpen] = useState(false);

	const { volume } = useSelector(
		(state) => ({
			volume: state.audio.volume,
		}),
		shallowEqual,
	);

	// 打开音量浮窗
	const handleOpenChange = (newOpen) => {
		console.log('newOpen', newOpen);
		setOpen(newOpen);
	};

	// 改变音量
	const onChange = (value) => {
		changeVolume(value);
	};

	return (
		<VolumeAdjusterStyles>
			<Popover
				overlayClassName='volume-adjuster-popover'
				content={
					<Fragment>
						<ConfigProvider
							theme={{
								components: {
									Slider: {
										railBg: '#ececec', // 轨道背景色
										trackBg: '#00cc65', // 已激活部分的颜色
										handleColor: '#00cc65', // 滑块颜色
										trackHoverBg: '#00cc65', // 滑块颜色
										dotActiveBorderColor: '#00cc65', // 圆点激活态边框颜色
										handleActiveOutlineColor: '#00cc65', // 滑块激活态外框色
										handleActiveColor: '#00cc65', // 滑块激活态边框色
										dotBorderColor: '#00cc65', // 圆点边框颜色
										dotSize: 5, // 滑块圆点尺寸
										handleLineWidthHover: 2, // 滑块边框宽度（悬浮态）
									},
								},
							}}>
							<Slider vertical defaultValue={volume} tooltip={{ formatter: null }} step={2} onChange={onChange} />
						</ConfigProvider>
						<div className='volume-value'>{volume}%</div>
						<Divider />
						{volume ? (
							<i className='iconfont icon-volume-1' style={{ marginTop: '10px' }}></i>
						) : (
							<i className='iconfont icon-volume-x' style={{ marginTop: '10px' }}></i>
						)}
					</Fragment>
				}
				placement='top'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<i className={classNames('iconfont', 'icon-volume-1', open ? 'sound-active' : '')}></i>
			</Popover>
		</VolumeAdjusterStyles>
	);
};

export default memo(VolumeAdjuster);
