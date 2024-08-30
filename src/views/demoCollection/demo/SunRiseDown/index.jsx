import React, { Fragment, memo, useRef, useState } from 'react';
import { SunRiseDownStyles } from '@/views/demoCollection/demo/SunRiseDown/styles';
import { GlobalStyle } from '@/views/demoCollection/styles/CommonDemoStyles';

/**
 * @description: 模拟太阳升起与日落
 */
const DynamicSuccessIcon = () => {
	const [value, setValue] = useState(50);
	const container = useRef();
	const sun = useRef();

	// 控制滑杆
	const handleChange = (event) => {
		setValue(event.target.value);
		sun.current.style.setProperty('--delay-time', `-${event.target.value / 100}s`); // 更新动画的延迟时间
		container.current.style.setProperty('--delay-time', `-${event.target.value / 100}s`);
	};

	return (
		<Fragment>
			{/* 全局样式 */}
			<GlobalStyle></GlobalStyle>
			<SunRiseDownStyles>
				<div className='title'>模拟太阳升起与降落：animation-delay延迟动画、transform旋转中心点</div>
				<div className='main'>
					<div className='container' ref={container}>
						<div className='sun' ref={sun}></div>
					</div>
					<input type='range' className='slider' min='0' max='100' value={value} onChange={handleChange} />
					<div>控制太阳升起降落</div>
				</div>
			</SunRiseDownStyles>
		</Fragment>
	);
};

export default memo(DynamicSuccessIcon);
