const { exec } = require('child_process');

// SCP命令
const sourcePath = './build/*'; // 本地文件路径
const destinationPath = 'root@47.113.177.51:/my-data/static-web/eliauk-blog-web'; // 目标服务器路径

const DeleteCommand = `ssh root@47.113.177.51 "cd /my-data/static-web/eliauk-blog-web && rm -rf *"`; // 删除旧文件
const UploadCommand = `scp -r ${sourcePath} ${destinationPath}`; // 上传文件

// 执行SCP命令(需要安装scp插件， npm i scp -g)
exec(DeleteCommand, (error, stdout, stderr) => {
	// 1.删除旧文件
	if (error) {
		console.error(`删除错误：${error}`);
		return;
	}
	console.log('文件删除成功！');
	console.log('stdout:', stdout);
	console.error('stderr:', stderr);

	// 2.上传新文件
	exec(UploadCommand, (error, stdout, stderr) => {
		if (error) {
			console.error(`上传错误：${error}`);
			return;
		}
		console.log('文件上传成功！');
		console.log('stdout:', stdout);
		console.error('stderr:', stderr);
	});
});
