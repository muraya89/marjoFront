import dashboardLayout from "./views/dashboardLayout";

export default [
  {
    path: "/dashboard",
    component: dashboardLayout,
    children: [
      {
        path: "",
        redirect: "/dashboard/summaries",
      },
    ],
  },
];
