import applicationConstants from "./applicationConstants";
import call from "../../service/http";

export default {
  namespaced: true,
  state: {
    cars: [],
    car: {},
  },
  mutations: {
    MUTATE: (state, payload) => {
      state[payload.state] = payload.data;
    },
  },
  getters: {
    applicationGetters: (state) => (val) => state[val],
  },
  actions: {
    getCars({ commit }) {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("get", applicationConstants.cars)
        .then((res) => {
          commit("MUTATE", { state: "cars", data: res.data.data });
          commit("Dashboard/SET_LOADING", false, { root: true });
        })
        .catch((error) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          Event.$emit("ApiError", error.response);
        });
    },
    getCar({ commit }, id) {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("get", applicationConstants.car(id))
        .then((res) => {
          commit("MUTATE", { state: "car", data: res.data.data });
          commit("Dashboard/SET_LOADING", false, { root: true });
        })
        .catch((error) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          Event.$emit("ApiError", error.response);
        });
    },
  },
};
