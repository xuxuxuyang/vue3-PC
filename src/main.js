import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { xyRequest } from './axios'
// xyRequest
//   .request({
//     url: '/home/multidata',
//     methods: 'GET',
//     // showloding: false, //默认所有请求都显示loding 不需要的请求单独设置 showloding为false即可
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('new出来的实例中单个请求拦截')
//         return config
//       },
//       requestInterceptorCatch: (err) => {
//         console.log('new出来的实例中单个请求出错')
//         return err
//       },
//       responseInterceptor: (response) => {
//         console.log('new出来的实例中单个响应拦截', response)
//         return response
//       },
//       responseInterceptorCatch: (err) => {
//         console.log('new出来的实例中单个响应出错')
//         return err
//       }
//     }
//   })
//   .then((res) => console.log(res, 111))

// 初始化css
import 'normalize.css'
import './css/index.less'

const app = createApp(App)
import 'element-plus/dist/index.css'
//全局引入ele-puls
import ElementPlus from 'element-plus'
app.use(ElementPlus)
//按需引入ele-puls
// import { elecomps } from './ele-plus'
// elecomps(app)
//必须同一种方式注册在同一个app实例上
app.use(router)
app.use(store)
app.mount('#app')
