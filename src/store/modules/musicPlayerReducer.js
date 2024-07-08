import { createSlice } from '@reduxjs/toolkit';

const musicPlayerReducer = createSlice({
	name: 'musicPlayer',
	initialState: {
		songList: [], // 当前歌曲播放列表
		songId: 0, // 歌曲id
		volume: 5, //音量
		songUrl: 'http://47.113.177.51/media/audio/起风了.mp3', // 歌曲url
		isPlaying: false, // 是否播放中
		isPause: false, // 是否暂停
		sliderInput: false, // 是否正在拖动进度条
		ended: false, // 是否播放结束
		muted: false, // 是否静音
		currentTime: 0, // 当前播放时间
		duration: 0, // 总播放时长
	},
	reducers: {
		// 保存音量值
		setVolume(state, { payload }) {
			state.volume = payload;
		},

		// 保存当前音频url
		setSongUrl(state, { payload }) {
			state.songUrl = payload;
		},

		// 保存当前歌曲id
		setSongId(state, { payload }) {
			state.songId = payload;
		},

		// 是否正在播放
		setIsPlaying(state, { payload }) {
			state.isPlaying = payload;
		},
	},

	// 异步reducers
	extraReducers: () => {},
});

export const { setVolume, setAudioSrc, setIsPlaying, setSongUrl, setSongId } = musicPlayerReducer.actions;
export default musicPlayerReducer.reducer;
