import React, { memo, useEffect } from 'react';
import { VideoPlayerStyles } from '@/components/VideoPlayer/styles';
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import PropTypes from 'prop-types';

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
			poster, // 视频封面
			volume: 0.4, // 播放音量
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
