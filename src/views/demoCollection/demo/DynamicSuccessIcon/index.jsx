import React, { memo } from 'react';
import { DynamicSuccessIconStyles } from '@/views/demoCollection/demo/DynamicSuccessIcon/styles';
import { Button } from 'antd';
import { forceUpdateRender } from '@/hooks/forceUpdateRender';

/**
 * @description: 动态成功icon图标
 */
const DynamicSuccessIcon = () => {
	const { key, reRender } = forceUpdateRender();
	return (
		<DynamicSuccessIconStyles>
			<div className='title'>动态成功图标：通过stroke-dasharray、stroke-dashoffset属性控制</div>
			<Button type='primary' onClick={reRender}>
				重新播放
			</Button>
			<div className='main' key={key}>
				<svg width='400' height='400'>
					<circle
						fill='none'
						stroke='#68E534'
						strokeWidth='20'
						cx='200'
						cy='200'
						r='190'
						className='circle'
						strokeLinecap={'round'}
						transform='rotate(-90 200 200)'></circle>
					<polyline
						fill='none'
						stroke='#68E534'
						strokeWidth='20'
						points='88,214 173,284 304,138'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='tick'></polyline>
				</svg>
			</div>
		</DynamicSuccessIconStyles>
	);
};

export default memo(DynamicSuccessIcon);
