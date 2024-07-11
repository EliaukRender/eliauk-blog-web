import React, { Fragment, memo, useState } from 'react';
import { ConfigProvider, Divider, Popover, Slider } from 'antd';
import { SoundOutlined } from '@ant-design/icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeVolume } from '@/views/musicSection/store/actions/audioAction';

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
		setOpen(newOpen);
	};

	// 改变音量
	const onChange = (value) => {
		changeVolume(value);
	};

	return (
		<div>
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
										dotBorderColor: '#00cc65', // 圆点边框颜色
										dotSize: 6, // 滑块圆点尺寸
									},
								},
							}}>
							<Slider vertical defaultValue={volume} tooltip={{ formatter: null }} step={2} onChange={onChange} />
						</ConfigProvider>
						<div className='volume-value'>{volume}%</div>
						<Divider />
						<SoundOutlined />
					</Fragment>
				}
				placement='top'
				trigger='click'
				open={open}
				onOpenChange={handleOpenChange}>
				<SoundOutlined />
			</Popover>
		</div>
	);
};

export default memo(VolumeAdjuster);
