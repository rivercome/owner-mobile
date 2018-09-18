
const webpack = require('webpack')
const QiniuPlugin = require('qiniu-webpack-plugin')
module.exports = function (webpackConfig, env) {
  if (env !== 'production') {} else {
    webpackConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }),
      new QiniuPlugin({
        ACCESS_KEY: '1vVw4lm8C7zDqvroyJffv2siia8vAreKr2ZDmRFg',
        SECRET_KEY: 'kfj9oKkXjhmIdKVY5DrEB7V21jal4gj0Ghw53cxe',
        bucket: 'laowang',
        path: 'fe/'
      })
    )
  }
  return webpackConfig
}
