import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSongList } from '@/api/modules/musicService';

const musicPlayerReducer = createSlice({
	name: 'musicPlayer',
	initialState: {
		songList: [], // 当前歌曲播放列表
		songId: 0, // 歌曲id
		songUrl: '', // 歌曲url
		volume: 10, //音量
		isPlaying: false, // 是否播放中
		isPause: false, // 是否暂停
		sliderInput: false, // 是否正在拖动进度条
		isEnded: false, // 是否播放结束
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

		// 保存播放状态
		setIsPlaying(state, { payload }) {
			state.isPlaying = payload;
		},

		// 保存当前播放时间
		setCurrentTime(state, { payload }) {
			state.currentTime = payload;
		},

		// 保存当前歌曲总时长
		setDuration(state, { payload }) {
			state.currentTime = payload;
		},

		// 当前歌曲播放完毕
		setIsEnded(state, { payload }) {
			state.isEnded = payload;
		},
	},
	// 异步reducers
	extraReducers: (builder) => {
		builder
			.addCase(getSongListAction.fulfilled, (state, { payload }) => {
				console.log('getSongListAction', payload);
				state.songList = payload;
			})
			.addCase(getSongListAction.rejected, (state, action) => {
				console.log('error-getSongListAction', action);
			});
	},
});

export const { setVolume, setCurrentTime, setIsPlaying, setSongUrl, setSongId, setDuration, setIsEnded } = musicPlayerReducer.actions;
export default musicPlayerReducer.reducer;

/**
 * @description: 获取歌曲列表
 */
export const getSongListAction = createAsyncThunk('getSongList', async () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await getSongList();
		resolve(data);
	});
});
