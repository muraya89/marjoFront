import call from "../../service/http";
import AuthConstants from "./AuthConstants";

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
    registerUser({ commit }, data) {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("post", AuthConstants.REGISTER, data)
        .then((res) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          if (res.data.data.user) {
            Event.$emit("ApiSuccess", res.data.message);
            Event.$emit("route-change", "landingPage");
            Event.$emit("signup-verify", res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
          //commit("Dashboard/SET_LOADING", false, { root: true });
          //Event.$emit("ApiError", error.response);
        });
    },
  },
};
