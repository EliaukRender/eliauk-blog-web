/**
 * @description: 菜单Id枚举
 */
export const MENU_ID_ENUM = {
	MUSIC_HOME: 1,
	VIDEO: 2,
	WORLD: 3,
	LIKE: 4,
	SLEEP: 5,
	SPORT: 5,
	HOT: 7,
};

/**
 * @description: 频谱图动效样式
 */
export const AnalyzeChartList = [
	{ name: '关闭', mode: 'none' },
	{ name: '经典', mode: 'bars' },
	{ name: '荧光', mode: 'lightBars' },
	{ name: '对称', mode: 'doubleBars' },
];

/**
 * @description: 频谱图动效颜色
 */
export const AnalyzeColorList = [
	{ id: '1', colors: ['#00cc65', '#87f7a2', '#007c39', '#00cc65'] },
	{ id: '2', colors: ['#93ba71', '#bed478', '#f0c8d4', '#f8e89b'] },
	{ id: '3', colors: ['#84b488', '#bbe1af', '#94d380', '#cae442'] },
	{ id: '4', colors: ['#f4b556', '#f5e77e', '#9bbae6', '#e5eef0'] },
	{ id: '5', colors: ['#8ab4d2', '#aecfe3', '#dceef4', '#f7f5d6'] },
	{ id: '6', colors: ['#EBE6A6', '#FFE5A7', '#FFDB6D', '#FDECCA'] },
	{ id: '7', colors: ['#9ADCB5', '#AAE0DD', '#BCE6CA', '#CAECEA'] },
	{ id: '8', colors: ['#f779ba', '#ffa5c3', '#ffdcd1', '#ffbfbe'] },
];

/**
 * @description: 音乐馆页面标题列表
 */
export const MusicHomeTitleList = [
	{ id: 1, name: '精选' },
	{ id: 2, name: '排行' },
	{ id: 3, name: '分类' },
	{ id: 4, name: '歌手' },
];

/**
 * @description: 视频页面标题列表
 */
export const VideoPageTitleList = [
	{ id: 1, name: '推荐' },
	{ id: 2, name: '排行榜' },
	{ id: 3, name: '视频库' },
];
