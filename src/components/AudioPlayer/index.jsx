import React, { memo, useEffect } from 'react';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import 'xgplayer-music/dist/index.min.css';
import MusicPreset, { Analyze } from 'xgplayer-music';
import { AudioPlayerStyles } from '@/components/AudioPlayer/styles';
import { deep_green, light_green } from '@/assets/css/variables';

/**
 * @description: 音乐播放组件
 */
const AudioPlayer = (props) => {
	useEffect(() => {
		// 初始化播放器
		const player = new Player({
			lang: 'zh',
			id: 'music',
			url: '/media/audio/起风了.mp3',
			mediaType: 'audio',
			volume: 0.3,
			width: 800,
			height: 500,
			ignores: ['playbackrate'], // 不显示倍速
			controls: {
				initShow: true, // 默认显示控制栏
				mode: 'flex', // controls布局方式：flex、normal、bottom
				showNext: true, // 显示下一首按钮
				showPrev: true, // 显示上一首按钮
				showForward: true, // 显示快进按钮
				showBackward: true, // 显示快退按钮
			},
			marginControls: true,
			videoConfig: {
				crossOrigin: 'anonymous',
			},
			preset: ['default', MusicPreset], // 如果要同时使用默认preset，那么配置是['default', MusicPreset]
			commonStyle: {
				playedColor: deep_green, // 已播放部分的进度条颜色
				cachedColor: light_green, // 缓存部分的进度条颜色
				volumeColor: deep_green, // 音量条颜色
			},
		});

		// 监听播放
		player.on('play', () => {
			initAnalyzer(); // 播放时才初始化频谱
		});

		// 初始化频谱分析
		function initAnalyzer() {
			const analyzer = new Analyze(player, document.querySelector('canvas'), {
				bgColor: 'rgba(0,0,0,0.7)',
				stroke: 3,
				count: 512,
			});
			analyzer.mode = 'bars';
		}

		return () => {
			player.destroy();
		};
	}, []);

	return (
		<AudioPlayerStyles>
			<div id='music'></div>
			<div id='canvas'>
				<canvas width='550' height='110'></canvas>
			</div>
		</AudioPlayerStyles>
	);
};

export default memo(AudioPlayer);
