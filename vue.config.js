
module.exports = {
  publicPath: '/yl-ui',
  outputDir: 'docs',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    // extract: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    port: 8087
  }

  // configureWebpack: config => {
  //   output: {
  //     filename: '[name].[id].bundle.js'
  //   }
  // }
}