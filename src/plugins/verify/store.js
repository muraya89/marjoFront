import call from "../../service/http";
import constants from "./constants";
export default {
  namespaced: true,
  state: {
    loading: false,
    alert: {
      type: "info",
      message: "",
      show: false,
    },
  },
  mutations: {
    SET_LOADING: (state, payload) => {
      state.loading = payload;
    },
    SET_ALERT: (state, payload) => {
      Object.keys(state.alert).map((key) => {
        state.alert[key] = payload[key];
      });
    },
  },
  getters: {
    loading: (state) => state.loading,
    alert: (state) => state.alert,
  },
  actions: {
    verifyOtp: ({ commit }, data) => {
      commit("SET_LOADING", true);
      call("post", constants.verifyOtp, data)
        .then((res) => {
          commit("SET_LOADING", false);
          commit("SET_ALERT", {
            type: "success",
            message: res.data.data,
            show: true,
          });
          Event.$emit("onVerify");
        })
        .catch((error) => {
          commit("SET_ALERT", {
            type: "error",
            message: error.response.data.message,
            show: true,
          });
          commit("SET_LOADING", false);
        });
    },
    sendOTP: ({ commit }, data) => {
      commit("Dashboard/SET_LOADING", true, { root: true });
      call("post", constants.sendOtp, data)
        .then((res) => {
          Event.$emit("ApiSuccess", res.data.data);
          Event.$emit("showDialog");
          commit("Dashboard/SET_LOADING", false, { root: true });
        })
        .catch((error) => {
          Event.$emit("ApiError", error.response.data.message);
          commit("Dashboard/SET_LOADING", false, { root: true });
        });
    },
    resendOtp: ({ commit }, data) => {
      commit("SET_LOADING", true);
      call("post", constants.resendOtp, data)
        .then((res) => {
          commit("SET_ALERT", {
            type: "success",
            message: res.data.data,
            show: true,
          });
          commit("SET_LOADING", false);
        })
        .catch((error) => {
          commit("SET_ALERT", {
            type: "success",
            message: error.response.data.message,
            show: true,
          });
          commit("SET_LOADING", false);
        });
    },
    setAlert: ({ commit }, data) => {
      commit("SET_ALERT", data);
    },
  },
};
