import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
import store from './store'
app.use(router)
app.use(store)

// 初始化css
import 'normalize.css'
import './css/index.less'

//全局引入ele-puls 实际开发中请按需引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

//防止用户刷新页面VueX中数据丢失
// import utils from '@/utils/localStorage'
// store.dispatch('login/tokens', {
//   name: utils.get('name'),
//   password: utils.get('password')
// })
//挂载到Html页面
app.mount('#app')
