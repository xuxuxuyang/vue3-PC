import { createStore } from 'vuex'

//导入模块小仓库
import login from './modules/login'

export default createStore({
  state: () => {
    return {}
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
