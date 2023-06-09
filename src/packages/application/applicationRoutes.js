import dashboardLayout from "../../layouts/dashboard/dashboardLayout.vue";
import Auth from "../auth/middleware/Auth";
import Application from "./views/Application.vue";
import ApplicationDashboard from "./components/ApplicationDashboard.vue";
import CarView from "./components/CarView.vue";
import BookingHistory from "./components/BookingHistory";
import Cars from "./components/Cars";

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
          {
            path: "car-view/:id",
            name: "CarView",
            components: {
              view: ApplicationDashboard,
              action: CarView,
            },
          },
          {
            path: "cars",
            name: "Cars",
            components: { view: Cars },
          },
          {
            path: "booking-history",
            name: "BookingHistory",
            components: { view: BookingHistory },
            meta: { middleware: [Auth] },
          },
        ],
      },
    ],
  },
];
