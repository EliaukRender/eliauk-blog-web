import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMenuList, getSongList } from '@/api/modules/musicService';
import store from '@/store';
import { setSongList } from '@/views/musicSection/store/modules/audioReducer';

/**
 * @description: 音乐播放器---保存播放器全局数据
 */
const musicAppReducer = createSlice({
	name: 'musicApp',
	initialState: {
		curMenuId: '2-1', // 当前激活的左侧菜单id，默认是"喜欢"菜单
		showFullScreenLyric: false, // 是否显示全屏歌词
		drawerVisible: false,
		drawerContentId: 1, // 1-频谱设置； 2-当前歌曲列表
		menuList: [], // 菜单列表
		menuSongList: [], // 当前菜单对应的歌曲列表
	},
	reducers: {
		// 保存当前菜单id
		setCurMenuId(state, { payload }) {
			state.curMenuId = payload;
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
	},
	// 异步reducers
	extraReducers: (builder) => {
		/* 获取歌单列表 */
		builder
			.addCase(getSongListAction.fulfilled, (state, { payload }) => {
				console.log('getSongListAction', payload);
				state.menuSongList = payload;
			})
			.addCase(getSongListAction.rejected, (state, action) => {
				console.log('error-getSongListAction', action);
			});

		/* 获取菜单列表  */
		builder
			.addCase(getMenuListAction.fulfilled, (state, { payload }) => {
				console.log('getMenuListAction', payload);
				state.menuList = payload;
			})
			.addCase(getMenuListAction.rejected, (state, action) => {
				console.log('error-getMenuListAction', action);
			});
	},
});

export const { setCurMenuId, setShowFullScreenLyric, setDrawerVisible, setDrawerContentId } = musicAppReducer.actions;
export default musicAppReducer.reducer;

/**
 * @description: 获取歌曲列表
 */
export const getSongListAction = createAsyncThunk('getSongList', async () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await getSongList();
		resolve(data);
	});
});

/**
 * @description: 获取菜单列表
 */
export const getMenuListAction = createAsyncThunk('getMenuList', async () => {
	return new Promise(async (resolve, reject) => {
		const { data } = await getMenuList();
		resolve(data);
	});
});
