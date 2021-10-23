module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://qinchenju.com/homemaking/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': '' // 重写地址
        }
      }
    }
  }
}
