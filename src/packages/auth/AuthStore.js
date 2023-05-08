import call from "../../service/http";
import AuthConstants from "./AuthConstants";
import AuthService from "./AuthService";

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
            setTimeout(() => {
              Event.$emit("route-change", "landingPage");
              AuthService.login(res.data.data.token, res.data.data.user);
            }, 2000);
          }
        })
        .catch((error) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          Event.$emit("ApiError", error.response);
        });
    },

    logout: ({ commit }) => {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("post", AuthConstants.LOGOUT).then(() => {
        commit("Dashboard/SET_LOADING", false, { root: true });
        AuthService.logout();
      });
    },

    login: ({ commit }, data) => {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("post", AuthConstants.LOGIN, data)
        .then((res) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          if (res.data.data.user) {
            Event.$emit("ApiSuccess", res.data.message);
            // Event.$emit("route-change", "ApplicationDashboard");
            AuthService.login(res.data.data.token, res.data.data.user);
          }
        })
        .catch((error) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          Event.$emit("ApiError", error.response);
        });
    },
  },
};
