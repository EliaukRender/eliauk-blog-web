const client = require('scp2');
const path = require('path');
const localPath = path.join(__dirname, 'build');

client.scp(localPath, {
  'host': '47.113.177.51',
  'username': 'root',
  'password': 'chang0530.',
  'path': '/my-data/static-web/eliauk-blog-web'
}, err => {
  if (!err) {
    console.log('上传成功')
  } else {
    console.log('err', err)
  }
})

console.log('23131',);