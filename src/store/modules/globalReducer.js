import { createSlice } from '@reduxjs/toolkit';

const globalReducer = createSlice({
	name: 'global',
	initialState: {
		scrollY: 0, // 页面在Y轴方向滚动值
		scrollDirection: '', // up-往上； down-往下
		currentSectionId: 0, // 当前显示的页面的section id，默认是0
	},
	// 同步reducers
	reducers: {
		// 保存最新的scrollY值
		setScrollY(state, { payload }) {
			state.scrollY = payload;
		},

		// 网页滚动的方向
		setScrollDirection(state, { payload }) {
			state.scrollDirection = payload;
		},

		// 保存当前激活的索引id
		setCurSectionId(state, { payload }) {
			state.currentSectionId = payload;
		},
	},

	// 异步reducers
	extraReducers: () => {},
});

export const { setScrollY, setCurSectionId, setScrollDirection } = globalReducer.actions; // 同步的dispatch
export default globalReducer.reducer; // reducer
