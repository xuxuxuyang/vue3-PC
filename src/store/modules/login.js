import utils from '@/utils/localStorage'
import { gettoken, getuserdata } from '@/axios/login/login'
import router from '../../router'

const login = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      issave: '',
      userdata: ''
    }
  },
  getters: {},
  mutations: {
    savepassword(state, issave) {
      state.issave = issave
    },
    savetoken(state, token) {
      state.issave = token
    },
    userdata(state, data) {
      state.userdata = data
    }
  },
  actions: {
    //记住密码
    savepassword({ commit }, issave) {
      commit('savepassword', issave)
    },
    //用户登陆
    async token({ commit }, payload) {
      console.log(payload, 888)
      const { token, id } = await gettoken(payload)
      // 1.拿到用户的token存入VueX中
      commit('savetoken', token)
      //2.拿到用户的token和id存入本地缓存localStorge中 id用来进入首页时请求数据
      utils.set('token', token)
      utils.set('id', id)
      //3.使用id请求用户数据 存入VueX中
      const userdata = await getuserdata(id)
      commit('userdata', userdata)
      //4.把用户的数据也存在本地缓存localStorge中
      utils.set('userdata', userdata)
      //5.跳转到首页
      router.push('/about')
    }
  }
}

export default login
