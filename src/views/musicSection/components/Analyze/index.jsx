import React, { memo, useEffect, useRef, useState } from 'react';
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

	useEffect(() => {
		if (!isPlaying) return;
		const analyser = getAnalyser();
		const analyzeInstance = new AnalyzeClass(audio, analyser, canvasRef.current, canvasOptions);
		analyzeInstance.renderFrame();
	}, [canvasOptions, isPlaying]);

	return <canvas ref={canvasRef} width={800} height={300} />;
};

export default memo(AudioSpectrumVisualizer);
