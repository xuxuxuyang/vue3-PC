const path = require('path')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  outputDir: './build',
  // plugins: [           //按需引入ElementPlus组件的插件配置(官网)
  //   Components({
  //     resolvers: [ElementPlusResolver()]
  //   })
  // ],
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src')) //只有@有代码提示
      .set('views', '@/views') //views没有代码提示 其他也是
      .set('utils', '@/utils')
  }
  // 配置跨域
  // devServer: {
  //   proxy: {
  //     '/test': {
  //       //前端发请求，只要带有这个路径就代理
  //       target: 'http://152.136.185.210:5000'
  //     }
  //   }
  // }
}
