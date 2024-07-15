import React, { memo, useEffect, useRef } from 'react';
import { audio, getAnalyser } from '@/views/musicSection/store/actions/audioAction';
import { shallowEqual, useSelector } from 'react-redux';
import AnalyzeClass from '@/views/musicSection/utils/analyze/AnalyzeClass';

/**
 * @description: 频谱图
 */
const AudioSpectrumVisualizer = () => {
	const canvasRef = useRef(null);
	// canvas配置
	const { canvasOptions, isPlaying } = useSelector(
		(state) => ({
			canvasOptions: state.analyze.canvasOptions,
			isPlaying: state.audio.isPlaying,
		}),
		shallowEqual,
	);

	const id = useRef(0); // 帧动画id

	useEffect(() => {
		if (!isPlaying) {
			cancelAnimationFrame(id.current);
			// analyzeInstance.clearCanvas();
			return;
		}
		const analyser = getAnalyser();
		const analyzeInstance = new AnalyzeClass(audio, analyser, canvasRef.current, canvasOptions);

		const render = () => {
			if (id.current) {
				cancelAnimationFrame(id.current); // 清除上一次绘制
			}
			analyzeInstance.renderFrame(); // 调用方法绘制
			id.current = requestAnimationFrame(render); // 绘制得到新id
		};
		render();
	}, [canvasOptions, isPlaying]);

	return <canvas className='analyze-canvas' ref={canvasRef} width={800} height={300} />;
};

export default memo(AudioSpectrumVisualizer);
