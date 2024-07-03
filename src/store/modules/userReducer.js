import { createSlice } from '@reduxjs/toolkit';

const userReducer = createSlice({
	name: 'user',
	initialState: {
		token: '',
	},
	reducers: {
		setToken(state, { payload }) {
			state.token = payload;
		},
	},
	extraReducers: () => {},
});

export const { setToken } = userReducer.actions;
export default userReducer.reducer;
