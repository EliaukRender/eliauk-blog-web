import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalReducer from '@/store/modules/globalReducer';
import userReducer from '@/store/modules/userReducer';
import musicPlayerReducer from '@/store/modules/musicPlayerReducer';

// userReducer持久化配置
const userReducerPersisCfg = {
	key: 'user',
	storage,
	whitelist: ['token'],
};

const store = configureStore({
	reducer: {
		global: globalReducer, // persistReducer对reducer持久化
		musicPlayer: musicPlayerReducer,
		user: persistReducer(userReducerPersisCfg, userReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Redux Toolkit忽略特定的非序列化值从而兼容redux-persist
			},
		}),
});

export const persistor = persistStore(store); // 持久化后的store
export default store;
