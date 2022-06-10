import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dashboard from "./packages/dashboard";
import idleVue from "idle-vue";

Vue.config.productionTip = false;

const eventsHub = new Vue();
const options = { router, store, eventEmitter: eventsHub, idleTime: 10000 };

Vue.use(dashboard, options, idleVue);

new Vue({
  router,
  store,
  vuetify,
  data() {
    return {
      messageStr: "",
    };
  },
  onIdle() {
    this.messageStr = "ZZZ";
    console.log("idle logout", router.currentRoute);
  },
  render: (h) => h(App),
}).$mount("#app");
