import OtpVerificaiton from "./OtpVerification";
import store from "./store";

const OtpVerificaitonPlugin = {
  install(Vue, options) {
    Vue.component("OtpVerificaiton", OtpVerificaiton);
    Vue.prototype.$verify = {
      show(params) {
        Event.$emit("showVerify", params);
      },
    };
    options.store.registerModule("OTP", store);
  },
};

export default OtpVerificaitonPlugin;
