import dashboardLayout from "../../layouts/dashboard/dashboardLayout";
import landingPage from "./components/landingPage.vue";
import signup from "../auth/components/Signup.vue";

export default [
  {
    path: "/dashboard",
    component: dashboardLayout,
    children: [
      {
        path: "",
        redirect: "/dashboard/landing",
      },
      {
        path: "landing",
        name: "landingPage",
        components: { dashboard: landingPage },
      },
      {
        path: "signup",
        name: "Signup",
        components: {
          dashboard: landingPage,
          auth: signup,
        },
      },
    ],
  },
];
