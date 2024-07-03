const path = require('path');
const CracoLessPlugin = require('craco-less');
const postcssPx2Rem = require('postcss-pxtorem');

const resolve = (dir) => path.resolve(__dirname, dir);

const cracoConfig = ({ env }) => {
	const isEnvProduction = env === 'production';

	return {
		webpack: {
			alias: {
				'@': resolve('src'),
			},
			configure: (webpackConfig, { env, paths }) => {
				// 添加处理 SVG 的 loader
				webpackConfig.module.rules[1].oneOf.unshift({
					test: /\.svg$/,
					include: resolve('./src/assets/svgIcons/icons'),
					use: [
						{ loader: 'svg-sprite-loader', options: {} },
						{ loader: 'svgo-loader', options: { symbolId: 'icon-[name]' } },
					],
				});
				webpackConfig.optimization.minimize = true; // 是否压缩代码
				webpackConfig.devtool = isEnvProduction ? 'hidden-source-map' : 'source-map'; // 是否显示源码

				return webpackConfig;
			},
		},
		plugins: [
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
			// 可以在这里添加其它插件配置
		],
		// style: {
		// 	postcss: {
		// 		mode: 'extends',
		// 		loaderOptions: () => {
		// 			return {
		// 				postcssOptions: {
		// 					ident: 'postcss',
		// 					config: false,
		// 					plugins: [
		// 						postcssPx2Rem({
		// 							rootValue: 192, // 设计稿尺寸/10
		// 							propList: ['*'], // 需要转换的属性，默认为 ['*']
		// 							exclude: /node_modules/i, // 哪些文件不需要转换
		// 						}),
		// 					],
		// 				},
		// 				sourceMap: false,
		// 			};
		// 		},
		// 	},
		// },
		babel: {
			plugins: [['babel-plugin-transform-remove-console', { exclude: isEnvProduction ? ['error', 'warn'] : ['error', 'warn', 'log'] }]],
		},
		devServer: {
			proxy: {
				'/blog': {
					// target: 'http://localhost:50000',
					target: 'http://47.113.177.51',
					pathRewrite: { '^/blog': '/blog' },
				},
			},
		},
	};
};

module.exports = cracoConfig;
