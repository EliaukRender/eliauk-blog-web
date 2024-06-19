import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '@/store/modules/homeReducer';
import globalReducer from '@/store/modules/globalReducer';

const store = configureStore({
	reducer: {
		home: homeReducer,
		global: globalReducer
	}
});
export default store;
