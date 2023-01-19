// import DashboardConstants from "@/modules/dashboard/DashboardConstants";
import _ from "lodash";
export default {
  namespaced: true,
  state: {
    links: [],
    loading: false,
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
  },
  getters: {
    links: (state) => {
      return _.orderBy(state.links, (link) => link.order);
    },
    loading: (state) => state.loading,
  },
  actions: {},
};
