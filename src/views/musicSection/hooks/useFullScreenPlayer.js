import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setFullScreenPlayer } from '@/views/musicSection/store/modules/musicAppReducer';

/**
 * @description: 播放器全屏显示
 * @param playerRef 播放器html实例
 */
export const useFullScreenPlayer = (playerRef) => {
	const { fullScreenPlayer, miniPlayer } = useSelector(
		(state) => ({
			fullScreenPlayer: state.musicApp.fullScreenPlayer,
		}),
		shallowEqual,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		// 实现全屏
		if (fullScreenPlayer && playerRef.current) {
			if (playerRef.current?.requestFullscreen) {
				playerRef.current.requestFullscreen();
			} else if (playerRef.current?.webkitRequestFullscreen) {
				/* 兼容旧版WebKit */
				playerRef.current.webkitRequestFullscreen();
			} else if (playerRef.current?.msRequestFullscreen) {
				/* 兼容IE */
				playerRef.current.msRequestFullscreen();
			}
		}

		// 退出全屏
		if (!fullScreenPlayer && playerRef.current) {
			// 检查是否在全屏
			if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
				if (document?.exitFullscreen) {
					document.exitFullscreen();
				} else if (document?.webkitExitFullscreen) {
					/* 兼容旧版WebKit */
					document.webkitExitFullscreen();
				} else if (document?.msExitFullscreen) {
					/* 兼容IE */
					document.msExitFullscreen();
				}
			}
		}

		// 处理全屏状态改变事件
		const handleFullScreenChange = () => {
			const isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
			if (!isFullScreen) {
				dispatch(setFullScreenPlayer(false));
			}
		};

		// 监听全屏状态改变事件
		document.addEventListener('fullscreenchange', handleFullScreenChange);
		document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
		document.addEventListener('MSFullscreenChange', handleFullScreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullScreenChange);
			document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
			document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
		};
	}, [fullScreenPlayer]);
};
