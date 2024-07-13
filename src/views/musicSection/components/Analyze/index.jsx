import React, { memo, useEffect, useRef } from 'react';
import { getAnalyser } from '@/views/musicSection/store/actions/audioAction';
import { shallowEqual, useSelector } from 'react-redux';
import { getGradient } from '@/views/musicSection/store/actions/analyzeActions';
import cloneDeep from 'lodash/cloneDeep';

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
		const bufferLength = analyser.frequencyBinCount; // 获取频率数据长度
		const dataArray = new Uint8Array(bufferLength); // dataArray用于存储频率数据;
		// 配置canvas
		const canvas = canvasRef.current;
		const { width, height } = canvas;
		const canvasCtx = canvas.getContext('2d');
		canvasCtx.strokeStyle = canvasOptions.colors[0]; // stroke样式
		canvasCtx.lineWidth = canvasOptions.stroke; // 宽度
		canvasCtx.fillRect(0, 0, width, height);
		const gradient = getGradient(canvasCtx, width, canvasOptions.colors); // 渐变色

		// 如果是柱状、波浪图，需要clearRect、beginPath
		canvasCtx.clearRect(0, 0, width, height);
		canvasCtx.beginPath();

		// 实时更新频谱数据、绘制canvas
		const updateVisualization = () => {
			analyser.getByteFrequencyData(dataArray); // 更新频率数据
			const list = Array.from(dataArray);
			const reverseList = cloneDeep(list).reverse();
			const doubleList = [...reverseList, ...list].filter((item, index) => index % 2 === 0);
			const count = doubleList.length > canvasOptions.count ? canvasOptions.count : doubleList.length;
			const percent = parseInt((height / 300) * 2, 10);
			canvasCtx.clearRect(0, 0, width, height);
			canvasCtx.fillStyle = 'transparent'; // 背景颜色透明
			canvasCtx.fillRect(0, 0, width, height);
			const step = width / count;
			const barWidth = step - step / 4; // bar宽度
			let barHeight;
			let x = 0;

			for (let i = 0; i < count; i++) {
				barHeight = doubleList[i];
				canvasCtx.fillStyle = gradient;
				canvasCtx.fillRect(x, height - barHeight, barWidth, barHeight * percent);
				x += step;
			}
			requestAnimationFrame(updateVisualization); // 递归调用，实现动画帧的更新
		};

		// 监听音乐的播放事件
		if (isPlaying) {
			updateVisualization();
		}
	}, [canvasOptions, isPlaying]);

	return <canvas ref={canvasRef} width={800} height={300} />;
};

export default memo(AudioSpectrumVisualizer);
