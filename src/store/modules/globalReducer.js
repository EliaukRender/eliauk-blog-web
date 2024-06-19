import { createSlice } from '@reduxjs/toolkit';

const globalReducer = createSlice({
	name: 'global',
	initialState: {
		scrollY: 0 // 页面在Y轴方向滚动值
	},
	// 同步reducers
	reducers: {
		// 保存最新的scrollY值
		setScrollY(state, { payload }) {
			state.scrollY = payload;
		}
	},
	// 异步reducers
	extraReducers: () => {}
});

export const { setScrollY } = globalReducer.actions; // 同步的dispatch
export default globalReducer.reducer; // reducer
