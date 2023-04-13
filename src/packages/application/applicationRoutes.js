import dashboardLayout from "../../layouts/dashboard/dashboardLayout.vue";
import Auth from "../auth/middleware/Auth";
import Application from "./views/Application.vue";
import ApplicationDashboard from "./components/ApplicationDashboard.vue";

export default [
  {
    path: "/application",
    component: dashboardLayout,
    children: [
      {
        path: "",
        redirect: "/application/home",
      },
      {
        path: "",
        components: { view: Application },
        meta: { middleware: [Auth] },
        children: [
          {
            path: "home",
            name: "ApplicationDashboard",
            components: { view: ApplicationDashboard },
            meta: { middleware: [Auth] },
          },
        ],
      },
    ],
  },
];
