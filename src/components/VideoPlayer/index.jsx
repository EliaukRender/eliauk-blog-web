import React, { memo, useEffect } from 'react';
import { VideoPlayerStyles } from '@/components/VideoPlayer/styles';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import PropTypes from 'prop-types';
import { deep_green, light_green } from '@/assets/css/variables';

/**
 * @description: 视频播放器
 */
const VideoPlayer = ({ id = 'player', url, width = '800px', height = '450px', poster }) => {
	useEffect(() => {
		const player = new Player({
			id,
			url,
			width,
			height,
			poster, // 封面url
			lang: 'zh',
			volume: {
				default: 0.2, // 默认音量20%
				showValueLabel: true, // 显示音量百分比
			},
			commonStyle: {
				playedColor: deep_green, // 已播放部分的进度条颜色
				cachedColor: light_green, // 缓存部分的进度条颜色
				volumeColor: deep_green, // 音量条颜色
			},
		});

		return () => {
			player.destroy(); // 销毁Player实例
		};
	}, [id, url, width, height]);

	return (
		<VideoPlayerStyles>
			<div id='player' className='player'></div>
		</VideoPlayerStyles>
	);
};

VideoPlayer.propTypes = {
	id: PropTypes.string,
	url: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

export default memo(VideoPlayer);
