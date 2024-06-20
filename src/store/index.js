import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalReducer from '@/store/modules/globalReducer';

// reducer持久化配置
const globalReducerPersisCfg = {
	key: 'global',
	storage,
	whitelist: ['currentSectionId', 'scrollY'] // whitelist指定持久化的数据
};

const store = configureStore({
	reducer: {
		global: persistReducer(globalReducerPersisCfg, globalReducer) // persistReducer对reducer持久化
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'] // Redux Toolkit忽略特定的非序列化值从而兼容redux-persist
			}
		})
});

export const persistor = persistStore(store); // 持久化后的store
export default store;
