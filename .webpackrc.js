module.exports = {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", libraryDirectory: "es", style: true }],
    ["import", { libraryName: "antd", "libraryDirectory": "lib",style:true} ,"ant"],
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
