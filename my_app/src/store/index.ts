import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "Mohamed Anwar",
    student: [
      { id: 1, name: "Mohamed Anwar", age: 30 },
      { id: 2, name: "Ahmed", age: 25 },
      { id: 3, name: "Ali", age: 20 },
      { id: 4, name: "Sara", age: 18 },
    ]
  },
  getters: {
    doubleCount: state => {
      return state.count * 2
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store 
