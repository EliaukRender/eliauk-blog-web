import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalReducer from '@/store/modules/globalReducer';
import userReducer from '@/store/modules/userReducer';
import audioReducer from '@/views/musicSection/store/modules/audioReducer';
import musicAppReducer from '@/views/musicSection/store/modules/musicAppReducer';
import analyzeReducer from '@/views/musicSection/store/modules/analyzeReducer';

// userReducer持久化配置
const userReducerPersisCfg = {
	key: 'user',
	storage,
	whitelist: ['token'],
};

// audio
const audioReducerPersisCfg = {
	key: 'audio',
	storage,
	whitelist: [],
};

// musicApp
const musicAppReducerPersisCfg = {
	key: 'musicApp',
	storage,
	whitelist: [],
};

const store = configureStore({
	reducer: {
		global: globalReducer, // persistReducer对reducer持久化
		user: persistReducer(userReducerPersisCfg, userReducer),
		audio: persistReducer(audioReducerPersisCfg, audioReducer),
		musicApp: persistReducer(musicAppReducerPersisCfg, musicAppReducer),
		analyze: analyzeReducer,
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
