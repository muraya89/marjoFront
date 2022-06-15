import dashboardLayout from "./views/dashboardLayout";
import landingPage from "./components/landingPage.vue";

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
        component: landingPage,
      },
    ],
  },
];
