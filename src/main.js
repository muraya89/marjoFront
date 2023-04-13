import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dashboard from "./packages/dashboard";
import Application from "./packages/application";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import idleVue from "idle-vue";
import listener from "@/mixin/listeners/listener";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import verify from "./plugins/verify";

Vue.config.productionTip = false;

window.Event = new Vue();

const options = {
  router,
  store,
  eventEmitter: window,
  idleTime: 10000,
};

Vue.use(dashboard, options, idleVue);
Vue.use(Application, options)
Vue.use(listener, options);
Vue.use(VueTelInputVuetify, { vuetify });
Vue.use(Toast);
Vue.use(verify, options);

new Vue({
  router,
  store,
  vuetify,
  mixins: [listener],
  // data() {
  //   return {
  //     messageStr: "",
  //   };
  // },
  // onIdle() {
  //   this.messageStr = "ZZZ";
  //   console.log("idle logout", router.currentRoute);
  // },
  render: (h) => h(App),
}).$mount("#app");
