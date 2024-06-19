const path = require('path');
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
	// webpack 配置
	webpack: {
		alias: {
			'@': resolve('src'),
		},
		configure: (webpackConfig, { env, paths }) => {
			webpackConfig.module.rules[1].oneOf = [
				...[
					{
						test: /.svg$/,
						include: resolve('./src/assets/svgIcons/icons'), // 存放svg的文件夹
						use: [
							{ loader: 'svg-sprite-loader', options: {} },
							{ loader: 'svgo-loader', options: { symbolId: 'icon-[name]' } },
						],
					},
				],
				...webpackConfig.module.rules[1].oneOf,
			];
			return webpackConfig;
		},
	},
	// 插件
	plugins: [
		// 支持less
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
