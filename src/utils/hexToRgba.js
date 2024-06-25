export const hexToRgba = (hex, alpha = 1) => {
	hex = hex.replace('#', '');

	// 将三个颜色通道分别提取出来
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// 返回 RGB 格式的颜色值
	return 'rgba(' + r + ', ' + g + ', ' + b + ',' + alpha + ')';
};
