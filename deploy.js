const { exec } = require('child_process');

// SCP命令
const sourcePath = './build/*'; // 本地文件路径
const destinationPath = 'root@47.113.177.51:/my-data/static-web/eliauk-blog-web'; // 目标服务器路径

const scpCommand = `scp -r ${sourcePath} ${destinationPath}`;

// 执行SCP命令(需要安装scp插件， npm i scp -g)
exec(scpCommand, (error, stdout, stderr) => {
	if (error) {
		console.error(`执行SCP命令时出错：${error}`);
		return;
	}
	console.log('文件上传成功！');
	console.log('stdout:', stdout);
	console.error('stderr:', stderr);
});
