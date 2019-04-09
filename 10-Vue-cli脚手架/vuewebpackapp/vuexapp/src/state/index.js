import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建状态仓库
export default new Vuex.Store({
  state: {
    num: 88,
  },
  mutations: {    // 定义状态改变函数
    increase(state) {
      state.num += 20
    },
    decrease(state) {
      state.num -= 20
    }
  },
  actions: {    // actions 中只能对 mutations 进行操作
    increaseAction(context) {    // context 是上下文对象
      setTimeout(function () {    // actions 里可以异步，mutations 不可以异步
        context.commit('increase')
      }, 1000)
    },
    decreaseAction(context) {
      setTimeout(function () {
        context.commit('decrease')
      }, 1000)
    }
  },
  getters: {
    getNum(state) {
      return state.num >= 0 ? state.num : 0
    }
  }
})
