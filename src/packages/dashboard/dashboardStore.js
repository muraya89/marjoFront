import call from "../../service/http";
import _ from "lodash";
import dashboardConstants from "./dashboardConstants";

export default {
  namespaced: true,
  state: {
    links: [],
    loading: false,
    state: { loading: false },
    actions: [],
    profile: {},
  },
  mutations: {
    SET_LINKS(state, payload) {
      if (_.findIndTex(state.links, payload) === -1) {
        state.links.push(payload);
      }
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_ACTIONS: (state, payload) => {
      if (_.findIndex(state.actions, payload) === -1) {
        state.actions.push(payload);
      }
    },
    MUTATE: (state, payload) => {
      state[payload.state] = payload.data;
    },
  },
  getters: {
    links: (state) => {
      return _.orderBy(state.links, (link) => link.order);
    },
    loading: (state) => state.loading,
    actions: (state) => state.actions,
    dashboardGetters: (state) => (val) => state[val],
  },
  actions: {
    profile({ commit }) {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("get", dashboardConstants.PROFILE)
        .then((res) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          commit("MUTATE", { state: "profile", data: res.data.data });
        })
        .catch((error) => {
          commit("Dashboard/SET_LOADING", false, { root: true });
          Event.$emit("ApiError", error.response);
        });
    },
  },
};
