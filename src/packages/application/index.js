import applicationRoutes from "./applicationRoutes";
import applicationStore from "./applicationStore";

export default {
  install(Vue, options) {
    if (options.router) {
      options.router.addRoutes(applicationRoutes);
    }

    if (options.store) {
      options.store.registerModule("Application", applicationStore);
    }
  },
};
