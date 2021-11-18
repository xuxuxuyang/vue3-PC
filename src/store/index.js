import { createStore } from 'vuex'

export default createStore({
  state: () => {
    return {
      issave: true
    }
  },
  mutations: {
    savepassword(state, value) {
      state.issave = value
    }
  },
  actions: {},
  modules: {}
})
