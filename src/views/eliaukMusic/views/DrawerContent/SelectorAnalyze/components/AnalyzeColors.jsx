import React, { memo } from 'react';
import { AnalyzeColorsStyles } from '@/views/eliaukMusic/views/DrawerContent/SelectorAnalyze/styles/AnalyzeColorsStyles';
import { AnalyzeColorList } from '@/views/eliaukMusic/constant';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setColors } from '@/views/eliaukMusic/store/modules/analyzeReducer';
import { hexToRgba } from '@/utils/hexToRgba';

const AnalyzeColors = () => {
	const dispatch = useDispatch();
	const { canvasOptions } = useSelector(
		(state) => ({
			canvasOptions: state.analyze.canvasOptions,
		}),
		shallowEqual,
	);

	return (
		<AnalyzeColorsStyles>
			<div className='title'>动效颜色</div>
			<div className='colors-box'>
				{AnalyzeColorList.map((item) => {
					return (
						<div
							key={item.id}
							className='color-item'
							style={
								item.colors[0] === canvasOptions.colors[0]
									? {
											boxShadow: `0 0 2px 3px ${hexToRgba(item.colors[0], 0.6)}`,
										}
									: {}
							}
							onClick={() => {
								dispatch(setColors(item.colors));
							}}>
							{item.colors.map((color) => {
								return <div className='color' style={{ backgroundColor: color }}></div>;
							})}
							{/*{item.colors[0] === canvasOptions.colors[0] && <i className='iconfont icon-duigou' style={{ color: canvasOptions.colors[0] }}></i>}*/}
						</div>
					);
				})}
			</div>
		</AnalyzeColorsStyles>
	);
};

export default memo(AnalyzeColors);
