import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import dashboard from "./packages/dashboard";

Vue.config.productionTip = false;

const options = { router, store };

Vue.use(dashboard, options);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
