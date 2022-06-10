import { landingStore, landingRoutes } from "./modules/landing";
import { dashboardRoutes, dashboardStore } from "./modules/dashboard";

export default {
  install(Vue, options) {
    // eslint-disable-next-line no-global-assign
    Event = new Vue();
    options.router.addRoute(...landingRoutes);
    options.router.addRoute(...dashboardRoutes);
    options.store.registerModule("Dashboard", dashboardStore);
    options.store.registerModule("Landing", landingStore);
  },
};
