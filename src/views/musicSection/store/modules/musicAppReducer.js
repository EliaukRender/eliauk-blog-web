import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteSongFromSheet, moveSongToSheet, queryCommonMenuList, querySheetList, querySongListBySheetId } from '@/api/modules/musicService';
import messageToast from '@/components/MessageToast';

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
	extraReducers: (builder) => {
		builder
			.addCase(querySheetListAction.fulfilled, (state, { payload }) => {
				state.sheetList = payload;
				state.curSheet = payload.length > 0 ? payload[0] : {}; // 默认激活【喜欢歌单】
			})
			.addCase(queryCommonMenuListAction.fulfilled, (state, { payload }) => {
				state.menuList = payload;
			})
			.addCase(querySongListBySheetIdActon.fulfilled, (state, { payload }) => {
				state.sheetSongList = payload;
			})
			.addCase(addSongToOtherSheetActon.fulfilled, (state, { payload }) => {
				messageToast.success('添加成功');
			})
			.addCase(deleteSongFromSheetActon.fulfilled, (state, { payload }) => {
				messageToast.success('删除成功');
				const { data, originalParams } = payload;
				const index = state.sheetSongList.findIndex((item) => item.songId === originalParams.songId);
				state.sheetSongList.splice(index, 1);
			})
			.addMatcher(
				// 统一处理所有 rejected 状态的 action
				(action) => action.type.endsWith('/rejected'),
				(state, action) => {
					console.log(`${action.type}请求错误:`, action.error);
				},
			);
	},
});

export const {
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

/**
 * @description: 获取自建歌单列表
 */
export const querySheetListAction = createAsyncThunk('querySheetList', async () => {
	const { data } = await querySheetList();
	return data;
});

/**
 * @description: 获取公共菜单列表
 * @param menuId
 */
export const queryCommonMenuListAction = createAsyncThunk('queryCommonMenuList', async () => {
	const { data } = await queryCommonMenuList();
	return data;
});

/**
 * @description: 基于歌单ID获取音乐列表
 */
export const querySongListBySheetIdActon = createAsyncThunk('querySongListBySheetId', async (sheetId) => {
	const { data } = await querySongListBySheetId({ sheetId });
	return data;
});

/**
 * @description: 添加指定歌曲到指定歌单
 */
export const addSongToOtherSheetActon = createAsyncThunk('addSongToOtherSheet', async (params) => {
	const { data } = await moveSongToSheet(params);
	return data;
});

/**
 * @description: 删除指定歌单的指定歌曲
 */
export const deleteSongFromSheetActon = createAsyncThunk('deleteSongFromSheet', async (params) => {
	const { data } = await deleteSongFromSheet(params);
	return { data, originalParams: params };
});
