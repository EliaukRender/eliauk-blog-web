import store from '@/store';
import {
	setCurrentTime,
	setDuration,
	setIsEnded,
	setIsPause,
	setIsPlaying,
	setSongId,
	setSongUrl,
	setVolume,
} from '@/views/musicSection/store/modules/audioReducer';
import MessageToast from '@/components/MessageToast';

const dispatch = store.dispatch;
const audio = new Audio(); // 初始化audio

/**
 * @description: 下一首
 */
export const playNextSong = async () => {
	console.log('playNextSong');
	let { songList, songId } = store.getState().audio;
	let index = songList?.findIndex((item) => item.songId === songId);
	// 是否最后一首
	index = index === songList?.length - 1 ? 0 : index + 1;
	// 找到下一首
	const nextSong = songList[index];
	// 重置状态
	dispatch(setSongId(nextSong.songId));
	dispatch(setSongUrl(nextSong.songUrl));
	dispatch(setIsPlaying(false));
	dispatch(setIsPause(false));
	dispatch(setIsEnded(true));
	dispatch(setCurrentTime(0));
	dispatch(setDuration(0));
	// 播放
	await playAudio();
};

/**
 * @description: 上一首
 */
export const playPreSong = async () => {
	console.log('playPreSong');
	let { songList, songId } = store.getState().audio;
	let index = songList?.findIndex((item) => item.songId === songId);
	// 是否第一首
	index = index === 0 ? songList?.length - 1 : index - 1;
	// 找到下一首
	const preSong = songList[index];
	// 重置状态
	dispatch(setSongId(preSong.songId));
	dispatch(setSongUrl(preSong.songUrl));
	dispatch(setIsPlaying(false));
	dispatch(setIsPause(false));
	dispatch(setIsEnded(true));
	dispatch(setCurrentTime(0));
	dispatch(setDuration(0));
	// 播放
	await playAudio();
};

/**
 * @description: 播放歌曲
 */
export const playAudio = async () => {
	console.log('playAudio');
	let { songUrl, songList, volume, songId, isEnded, currentTime, duration, isPause } = store.getState().audio;
	/* 1、暂停后继续播放 */
	if (isPause && !!songUrl && !isEnded && duration) {
		audio.currentTime = currentTime;
		audio
			.play()
			.then(() => {
				dispatch(setIsPlaying(true));
			})
			.catch(() => {
				MessageToast.warning('歌曲播放失败');
			});
		return;
	}
	/* 2、歌曲列表中没有任何歌曲信息，无法播放歌曲 */
	if (!songUrl && !songList?.length) {
		MessageToast.warning('暂无歌曲音频，请刷新页面后重试');
		return;
	}
	/* 3、有歌曲列表，但是没有待播放的歌曲信息 */
	if (!!songList?.length && !songUrl && !currentTime) {
		songUrl = songList[0].songUrl;
		songId = songList[0].songId;
	}
	// 设置默认音量
	if (volume === 20) {
		audio.volume = 20 / 100;
	}
	// 从0开始播放
	try {
		audio.src = songUrl;
		audio
			.play()
			.then(() => {
				console.log('当前歌曲时长：', audio.duration);
				dispatch(setSongUrl(songUrl));
				dispatch(setSongId(songId));
				dispatch(setIsEnded(false));
				dispatch(setIsPlaying(true));
				dispatch(setIsPause(false));
				dispatch(setDuration(audio.duration));
			})
			.catch(() => {
				MessageToast.warning('歌曲播放失败');
			});
	} catch (error) {
		console.error('播放失败', error);
	}
};

/**
 * @description: 暂停歌曲
 */
export const pauseAudio = () => {
	console.log('pauseAudio');
	audio.pause();
	dispatch(setIsPlaying(false));
	dispatch(setIsPause(true));
};

/**
 * @description: 歌曲当前播放时间，实时保存
 */
audio.addEventListener('timeupdate', function () {
	console.log('当前时间', audio.currentTime);
	dispatch(setCurrentTime(audio.currentTime));
});

/**
 * @description: 歌曲播放完毕
 *               songId不重置的目的是为了定位下一首歌曲
 */
audio.addEventListener('ended', function () {
	console.log('歌曲播放完毕');
	resetAudioStatus();
	// 	自动下一首
	playNextSong();
});

/**
 * @description: 歌曲结束时，重置状态
 */
const resetAudioStatus = () => {
	dispatch(setIsEnded(true));
	dispatch(setIsPlaying(false));
	dispatch(setIsPause(false));
	dispatch(setSongUrl(''));
	dispatch(setCurrentTime(0));
	dispatch(setDuration(0));
};

/**
 * @description: 调节音量
 * @param curVol 当前音量值
 */
export const changeVolume = (curVol) => {
	if (curVol <= 0) {
		dispatch(setVolume(0));
		return;
	}
	dispatch(setVolume(curVol)); // 保存最新音量
	audio.volume = curVol / 100; // 调节音量
};

/**
 * @description: 前进: 固定前进5s
 */
export const addCurrentTime = () => {
	const ADD_TIME = 5;
	const { duration, currentTime } = store.getState().audio;
	const lastTime = currentTime + ADD_TIME;
	// 歌曲直接结束，开始下一首
	if (lastTime >= duration) {
		resetAudioStatus();
		playNextSong();
		return;
	}
	audio.currentTime = lastTime;
};

/**
 * @description: 后退: 固定后退5s
 */
export const decreaseCurrentTime = () => {
	const DECREASE_TIME = -5;
	const { currentTime } = store.getState().audio;
	const lastTime = currentTime + DECREASE_TIME;
	// 歌曲从0开始播放
	if (lastTime <= 0) {
		audio.currentTime = 0;
		return;
	}
	audio.currentTime = lastTime;
};
