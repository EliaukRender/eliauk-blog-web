import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSongList } from '@/api/modules/musicService';

const audioReducer = createSlice({
	name: 'audio',
	initialState: {
		songList: [], // 当前歌曲播放列表

		/*  最重要的7个字段  */
		songId: 0, // 歌曲id
		songUrl: '', // 歌曲url
		isPlaying: false, // 是否播放中
		isPause: false, // 是否暂停
		isEnded: false, // 是否播放结束
		currentTime: 0, // 当前播放时间
		duration: 0, // 总播放时长
		/*  最重要的7个字段  */

		musicMode: 1, // 1-顺序播放、2-随机播放、3-单曲循环
		muted: false, // 是否静音
		volume: 10, // 音量
		playbackRate: 1.0, // 播放速率
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

		// 保存暂停状态
		setIsPause(state, { payload }) {
			state.isPause = payload;
		},

		// 保存当前播放时间
		setCurrentTime(state, { payload }) {
			state.currentTime = payload;
		},

		// 保存当前歌曲总时长
		setDuration(state, { payload }) {
			state.duration = payload;
		},

		// 当前歌曲播放完毕
		setIsEnded(state, { payload }) {
			state.isEnded = payload;
		},

		// 保存音乐播放模式
		setMusicMode(state, { payload }) {
			state.musicMode = payload;
		},

		// 保存音乐是否静音
		setIsMuted(state, { payload }) {
			state.muted = payload;
		},

		// 保存播放速率
		setPlaybackRate(state, { payload }) {
			state.playbackRate = payload;
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

export const {
	setPlaybackRate,
	setMusicMode,
	setVolume,
	setCurrentTime,
	setIsPause,
	setIsPlaying,
	setSongUrl,
	setSongId,
	setDuration,
	setIsEnded,
	setIsMuted,
} = audioReducer.actions;
export default audioReducer.reducer;

/**
 * @description: 获取歌曲列表
 */
export const getSongListAction = createAsyncThunk('getSongList', async () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await getSongList();
		resolve(data);
	});
});
