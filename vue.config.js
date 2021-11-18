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
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
      .set('utils', '@/utils')
  }
}
