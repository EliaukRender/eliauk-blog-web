import { createSlice } from '@reduxjs/toolkit';

/**
 * @description: 音乐播放器---保存播放器全局数据
 */
const musicAppReducer = createSlice({
	name: 'musicApp',
	initialState: {
		curSheet: {}, // 当前激活的自建歌单
		curMenu: {}, // 当前激活的菜单
		sheetList: [], // 自建歌单列表
		menuList: [], // 菜单列表
		sheetSongList: [], // 当前歌单对应的音乐列表

		showFullScreenLyric: false, // 是否显示全屏歌词
		drawerVisible: false,
		drawerContentId: 1, // 1-频谱设置； 2-当前歌曲列表
		fullScreenPlayer: false, // 全屏
		maxPlayer: false, // 最大化
		miniPlayer: false, // 最小化
	},
	reducers: {
		// 保存当前激活的菜单
		setCurMenu(state, { payload }) {
			state.curMenu = payload;
		},

		// 保存当前激活的歌单
		setCurSheet(state, { payload }) {
			state.curSheet = payload;
		},

		// 保存歌单信息
		setSheetList(state, { payload }) {
			state.sheetList = payload;
		},

		// 保存菜单信息
		setMenuList(state, { payload }) {
			state.menuList = payload;
		},

		// 保存当前歌单对应的歌曲列表
		setSheetSongList(state, { payload }) {
			state.sheetSongList = payload;
		},

		// 是否全屏歌词
		setShowFullScreenLyric(state, { payload }) {
			state.showFullScreenLyric = payload;
		},

		// 抽屉组件是否打开
		setDrawerVisible(state, { payload }) {
			state.drawerVisible = payload;
		},

		// 保存抽屉显示的内容ID
		setDrawerContentId(state, { payload }) {
			state.drawerContentId = payload;
		},

		// 全屏
		setFullScreenPlayer(state, { payload }) {
			state.fullScreenPlayer = payload;
		},

		// 最小化
		setMiniPlayer(state, { payload }) {
			state.miniPlayer = payload;
		},

		// 最大化
		setMaxPlayer(state, { payload }) {
			state.maxPlayer = payload;
		},
	},
	// 异步reducers
	extraReducers: (builder) => {},
});

export const {
	setSheetList,
	setMenuList,
	setSheetSongList,
	setCurMenu,
	setCurSheet,
	setMaxPlayer,
	setFullScreenPlayer,
	setMiniPlayer,
	setShowFullScreenLyric,
	setDrawerVisible,
	setDrawerContentId,
} = musicAppReducer.actions;
export default musicAppReducer.reducer;
