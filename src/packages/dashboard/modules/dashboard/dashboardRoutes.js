import dashboardLayout from "./views/dashboardLayout";
import summaries from "./components/summaries";

export default [
  {
    path: "/dashboard",
    component: dashboardLayout,
    children: [
      {
        path: "",
        redirect: "/dashboard/summaries",
      },
      {
        path: "summaries",
        name: "summaries",
        component: summaries,
      },
    ],
  },
];
