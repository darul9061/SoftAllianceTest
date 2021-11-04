import { createStore } from "vuex";

export default createStore({
  state: {
    movie: null,
    error: null,
  },
  mutations: {
    addMovie(state, data){
      state.movie = data
    },
    addError(state, data){
      state.error = data
    }
  },
  actions: {},
  modules: {},
});
