/**
 * @description: 转换歌词
 * @return lyricList
 * @param lyricStr  歌词字符串
 */
export const transformLyric = (lyricStr) => {
	const list = lyricStr.split('\n'); // 分割歌词
	return (
		list
			.map((line) => {
				// 使用正则表达式匹配时间和歌词部分
				const match = line.match(/^\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
				if (match) {
					// 将时间转换为秒数
					const minutes = parseInt(match[1], 10);
					const seconds = parseInt(match[2], 10);
					const milliseconds = parseInt(match[3], 10);
					const timeInSeconds = minutes * 60 + seconds + milliseconds / 100;

					return {
						time: timeInSeconds,
						lyric: match[4].trim(), // 去除空格
					};
				} else {
					return null;
				}
			})
			.filter((obj) => obj !== null) || []
	);
};
