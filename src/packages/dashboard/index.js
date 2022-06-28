import { landingStore, landingRoutes } from "./modules/landing";
import { AuthStore, AuthRoutes } from "./modules/auth";
import { dashboardRoutes, dashboardStore } from "./modules/dashboard";

export default {
  install(Vue, options) {
    // eslint-disable-next-line no-global-assign
    Event = new Vue();
    options.router.addRoute(...landingRoutes);
    options.router.addRoute(...AuthRoutes);
    options.router.addRoute(...dashboardRoutes);
    options.store.registerModule("Dashboard", dashboardStore);
    options.store.registerModule("Landing", landingStore);
    options.store.registerModule("Auth", AuthStore);
  },
};
