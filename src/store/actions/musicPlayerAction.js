import store from '@/store/index';
import { setVolume } from '@/store/modules/musicPlayerReducer';

const dispatch = store.dispatch;
const audio = new Audio(); // 初始化audio

/**
 * @description: 查找歌曲
 * @param songId 歌曲id
 * @return songInfo
 */
const findSong = (songId) => {};

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
 * @description: 切换歌曲
 * @param curSongId 歌曲id
 */
export const changeSong = (curSongId) => {};

/**
 * @description: 播放歌曲
 */
export const playAudio = async () => {
	audio.src = store.getState().musicPlayer.songUrl;
	if (store.getState().musicPlayer.volume === 5) {
		audio.volume = 5 / 100;
	}
	try {
		await audio.play();
	} catch (error) {
		console.error('播放失败', error);
	}
};
