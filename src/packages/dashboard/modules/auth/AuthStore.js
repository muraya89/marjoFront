export default {
  namespaced: true,
  state: {
    modal: false,
  },
  mutations: {
    MUTATE: (state, payload) => {
      state[payload.state] = payload.data;
    },
  },
  getters: {
    authGetters: (state) => (val) => state[val],
  },
  actions: {
    openModal({ commit }, payload) {
      commit("MUTATE", { state: "modal", data: payload });
    },
  },
};
