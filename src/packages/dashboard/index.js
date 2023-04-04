import DashboardRoutes from "./dashboardRoutes";
import DashboardStore from "./dashboardStore";
import { AuthRoutes, AuthStore } from "../auth";

export default {
  install(Vue, options) {
    if (options.router) {
      options.router.addRoutes(DashboardRoutes);
      options.router.addRoutes(AuthRoutes);
    }

    if (options.store) {
      options.store.registerModule("Auth", AuthStore);
      options.store.registerModule("Dashboard", DashboardStore);
    }
  },
};