module.exports = {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", libraryDirectory: "es", style: true }]
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
    production: {
      publicPath: 'http://p2hfdzdsp.bkt.clouddn.com/fe',
      ignoreMomentLocale: true,
      exclude:[/node_modules/],
    }
  },
}
