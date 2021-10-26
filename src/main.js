import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 初始化css
import 'normalize.css'
import './css/index.less'
//全局引入ele-puls
import ElementPlus from 'element-plus'
//按需引入ele-puls
import 'element-plus/dist/index.css'
// import { elecomps } from './ele-plus'
//必须同一种方式注册
const app = createApp(App)
// elecomps(app)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
