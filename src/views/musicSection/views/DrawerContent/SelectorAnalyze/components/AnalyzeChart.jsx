import React, { memo } from 'react';
import { AnalyzeChartStyles } from '@/views/musicSection/views/DrawerContent/SelectorAnalyze/styles/AnalyzeChartStyles';
import { AnalyzeChartList } from '@/views/musicSection/constant';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setMode } from '@/views/musicSection/store/modules/analyzeReducer';

const images = require.context('@/views/musicSection/images/analyzeImage');
const imagePathList = images.keys();

/**
 * @description: 频谱图动效样式
 */
const AnalyzeChart = () => {
	const dispatch = useDispatch();
	const { canvasOptions } = useSelector(
		(state) => ({
			canvasOptions: state.analyze.canvasOptions,
		}),
		shallowEqual,
	);
	return (
		<AnalyzeChartStyles>
			<div className='title'>动效样式</div>
			<div className='chart-box'>
				{AnalyzeChartList.map((item) => {
					const imgPath = imagePathList.find((path) => path === `./${item.mode}.png`);
					return (
						<div
							key={item.mode}
							onClick={() => {
								dispatch(setMode(item.mode));
							}}>
							<div className='item'>
								<img className='img' src={require(`@/views/musicSection/images/analyzeImage/${imgPath ? item.mode : 'none'}.png`)} alt='' />
								{canvasOptions.mode === item.mode && <i className='iconfont icon-duigou1 checked'></i>}
								<div className='name'>{item.name}</div>
							</div>
						</div>
					);
				})}
			</div>
		</AnalyzeChartStyles>
	);
};

export default memo(AnalyzeChart);
