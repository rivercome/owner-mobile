module.exports = {
  fjPublish: {
    modules: [{
      name: '生产环境',
      env: 'prod',
      ssh: {
        host: '118.89.155.234',     // 服务器地址
        port: 22,                 // 端口
        username: 'ubuntu',         // 用户名
        password: 'wangkail123'          // 密码
      },
      buildCommand: 'build',    // 构建命令  === npm run build:sit
      localPath: './dist',            // 构建后上传文件
      remotePath: '/var/www/OwnerMobile'       // 服务端路径
    }]
  }
}
