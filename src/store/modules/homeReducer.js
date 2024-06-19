import { createSlice } from '@reduxjs/toolkit';

const homeReducer = createSlice({
	name: 'home',
	initialState: {
		currentSectionId: 0 // 当前显示的页面的section id，默认是0
	},
	// 同步reducers
	reducers: {
		setCurSectionId(state, { payload }) {
			// console.log('currentSectionId', payload);
			state.currentSectionId = payload;
		}
	},
	// 异步reducers
	extraReducers: () => {}
});

export const {setCurSectionId} = homeReducer.actions;  // 同步的dispatch
export default homeReducer.reducer;  // reducer