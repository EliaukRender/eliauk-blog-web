import store from '@/store/index';
import { setCurrentTime, setDuration, setIsEnded, setIsPlaying, setSongId, setSongUrl, setVolume } from '@/store/modules/musicPlayerReducer';
import MessageToast from '@/components/MessageToast';

const dispatch = store.dispatch;
const audio = new Audio(); // 初始化audio

/**
 * @description: 调节音量
 * @param curVol 当前音量值
 */
export const changeVolume = (curVol) => {
	if (curVol < 0) return;
	dispatch(setVolume(curVol)); // 保存最新音量
	audio.volume = curVol / 100; // 调节音量
};

/**
 * @description: 下一首
 */
export const playNextSong = async () => {
	let { songList, songId } = store.getState().musicPlayer;
	let index = songList?.findIndex((item) => item.songId === songId);
	// 是否最后一首
	index = index === songList?.length - 1 ? 0 : index + 1;
	// 找到下一首
	const nextSong = songList[index];
	// 更新歌曲信息
	dispatch(setSongId(nextSong.songId));
	dispatch(setSongUrl(nextSong.songUrl));
	// 播放
	await playAudio();
};

/**
 * @description: 上一首
 */
export const playPreSong = async () => {
	let { songList, songId } = store.getState().musicPlayer;
	let index = songList?.findIndex((item) => item.songId === songId);
	// 是否第一首
	index = index === 0 ? songList?.length - 1 : index - 1;
	// 找到下一首
	const preSong = songList[index];
	// 更新歌曲信息
	dispatch(setSongId(preSong.songId));
	dispatch(setSongUrl(preSong.songUrl));
	// 播放
	await playAudio();
};

/**
 * @description: 播放歌曲
 */
export const playAudio = async () => {
	let { songUrl, songList, volume, songId } = store.getState().musicPlayer;
	console.log('播放歌曲', songId);
	console.log('播放歌曲', songUrl);
	// 有歌曲列表，但没有待播放歌曲
	if (!songUrl && !songId && !!songList?.length) {
		songUrl = songList[0].songUrl;
		songId = songList[0].songId;
	}
	// 无任何歌曲信息
	if (!songUrl && !songList?.length) {
		MessageToast.warning('暂无歌曲音频');
	}
	// 设置默认音量
	if (volume === 10) {
		audio.volume = 10 / 100;
	}
	// 开始播放
	try {
		audio.src = songUrl;
		audio
			.play()
			.then(() => {
				console.log('当前歌曲时长：', audio.duration);
				dispatch(setSongUrl(songUrl));
				dispatch(setSongId(songId));
				dispatch(setIsPlaying(true));
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
	let { isPlaying, currentTime, songUrl } = store.getState().musicPlayer;
	// 正在播放，直接暂停
	if (isPlaying) {
		audio.pause();
		dispatch(setIsPlaying(false));
		return;
	}
	// todo 播放中途，重新播放
	if (currentTime !== 0) {
		audio.currentTime = currentTime;
		audio.play().then(() => {
			dispatch(setIsPlaying(true));
		});
	}
	// 无任何播放信息，从头播放
	if (currentTime === 0 && !songUrl) {
		playAudio();
	}
};

/**
 * @description: 歌曲当前播放时间
 */
audio.addEventListener('timeupdate', function () {
	dispatch(setCurrentTime(audio.currentTime));
});

/**
 * @description: 歌曲播放完毕
 */
audio.addEventListener('ended', function () {
	dispatch(setIsEnded(true));
	dispatch(setIsPlaying(false));
	dispatch(setIsPlaying(false));
	dispatch(setSongUrl(''));
	dispatch(setSongId(''));
	dispatch(setCurrentTime(0));
	dispatch(setDuration(0));
});
