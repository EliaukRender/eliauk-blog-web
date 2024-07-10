import { createSlice } from '@reduxjs/toolkit';

const musicAppReducer = createSlice({
	name: 'musicApp',
	initialState: {
		curMenuId: '2-1', // 当前激活的左侧菜单id，默认是"喜欢"菜单
	},
	reducers: {
		setCurMenuId(state, { payload }) {
			state.curMenuId = payload;
		},
	},
	// 异步reducers
	extraReducers: (builder) => {},
});

export const { setCurMenuId } = musicAppReducer.actions;
export default musicAppReducer.reducer;
