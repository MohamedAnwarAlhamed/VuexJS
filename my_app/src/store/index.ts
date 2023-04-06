import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    name: "Mohamed Anwar",
    student: [
      { id: 1, name: "Mohamed Anwar", age: 30 },
      { id: 2, name: "Ahmed", age: 25 },
      { id: 3, name: "Ali", age: 20 },
      { id: 4, name: "Sara", age: 18 },
    ],
  },
  getters: {
    doubleCount: (state) => (num) => {
      return state.count * 2 + num;
    },
  },
  mutations: {
    increment_M(state, n) {
      return (state.count += n);
    },
    decrement_M(state, n) {
      return (state.count -= n);
    },
  },
  actions: {
    increment_A(context, n) {
      context.commit("increment_M", n);
    },
    decrement_A(context, n) {
      context.commit("decrement_M", n);
    }
  },
  modules: {},
});

export default store;
