/**
 * @description: 音乐播放器异步处理操作
 */
import { createSheet, deleteSheet, deleteSongFromSheet, moveSongToSheet, queryCommonMenuList, querySheetList } from '@/api/modules/musicService';
import store from '@/store';
import {
	querySongListBySheetIdActon,
	setCurSheet,
	setMenuList,
	setSheetList,
	setSheetSongList,
} from '@/views/musicSection/store/modules/musicAppReducer';
import MessageToast from '@/components/MessageToast';
import messageToast from '@/components/MessageToast';

const dispatch = store.dispatch;

/**
 * @description: 获取自建歌单
 */
export const getSheetList = async () => {
	try {
		// 获取自建歌单列表
		const { data } = await querySheetList();
		dispatch(setSheetList(data || []));
		const { curSheet } = store.getState().musicApp;
		if (!curSheet?.sheetId) {
			dispatch(setCurSheet(data?.length ? data[0] : {}));
		}
	} catch (e) {
		console.log('error-getSheetList', e);
	}
};

/**
 * @description: 获取公共菜单
 */
export const getCommonMenuList = async () => {
	try {
		const { data } = await queryCommonMenuList();
		dispatch(setMenuList(data || []));
	} catch (e) {
		console.log('error-getCommonMenuList', e);
	}
};

/**
 * @description: 创建自建歌单
 */
export const handleCreateSheet = async ({ sheetName, sheetIcon }) => {
	try {
		await createSheet({ sheetName, sheetIcon });
		MessageToast.success('创建歌单成功');
		await getSheetList(); // 更新歌单列表
		return true;
	} catch (e) {
		console.log('error-handleCreateSheet', e);
		MessageToast.error(e.message || '创建歌单失败');
		return false;
	}
};

/**
 * @description: 删除自建歌单
 */
export const handleDeleteSheet = async ({ sheetId }) => {
	try {
		await deleteSheet({ sheetId });
		MessageToast.success('删除歌单成功');
		await getSheetList();
		const { curSheet, sheetList } = store.getState().musicApp;
		// 如果当前歌单处于被删除的歌单，则跳转到【喜欢】歌单
		if (curSheet.sheetId === sheetId) {
			dispatch(setSheetSongList([]));
			dispatch(setCurSheet(sheetList[0]));
			dispatch(querySongListBySheetIdActon(sheetList[0].sheetId));
		}
	} catch (e) {
		console.log('error-handleDeleteSheet', e);
		MessageToast.error(e.message || '删除歌单失败');
	}
};

/**
 * @description: 添加指定歌曲到指定歌单
 */
export const handleMoveSongToSheet = async ({ curSong, sheetId }) => {
	const { songId } = store.getState().audio;
	const { curSheet } = store.getState().musicApp;
	try {
		// 歌单列表中移动歌曲，则有curSong
		// 待播放列表中移动歌曲，则没有curSong
		await moveSongToSheet({
			songId: curSong ? curSong.songId : songId,
			sheetId,
		});
		MessageToast.success('添加成功');
		if (sheetId === curSheet.sheetId) {
			dispatch(querySongListBySheetIdActon(sheetId));
		}
	} catch (e) {
		console.log('error-handleMoveSongToSheet', e);
		MessageToast.error(e.message || '添加失败');
	}
};

/**
 * @description: 删除指定歌单的指定歌曲
 */
export const handleDeleteSongFromSheet = async ({ songId, sheetId }) => {
	try {
		await deleteSongFromSheet({ songId, sheetId });
		messageToast.success('删除成功');
		const { sheetSongList } = store.getState().musicApp;
		const list = sheetSongList.filter((item) => item.songId !== songId);
		dispatch(setSheetSongList(list));
	} catch (e) {
		console.log('error-handleDeleteSongFromSheet', e);
		messageToast.error(e.message || '删除歌曲失败');
	}
};
