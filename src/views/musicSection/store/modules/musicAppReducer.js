import { createSlice } from '@reduxjs/toolkit';

/**
 * @description: 音乐播放器---保存播放器全局数据
 */
const musicAppReducer = createSlice({
	name: 'musicApp',
	initialState: {
		curMenuId: '2-1', // 当前激活的左侧菜单id，默认是"喜欢"菜单
		showFullScreenLyric: false, // 是否显示全屏歌词
	},
	reducers: {
		// 保存当前菜单id
		setCurMenuId(state, { payload }) {
			state.curMenuId = payload;
		},

		// 保存是否全屏歌词
		setShowFullScreenLyric(state, { payload }) {
			state.showFullScreenLyric = payload;
		},
	},
	// 异步reducers
	extraReducers: (builder) => {},
});

export const { setCurMenuId, setShowFullScreenLyric } = musicAppReducer.actions;
export default musicAppReducer.reducer;
