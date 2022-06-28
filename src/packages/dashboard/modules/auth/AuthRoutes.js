import AuthLayout from "./views/AuthLayout.vue";
import Login from "./components/Login.vue";

export default [
  {
    path: "/auth",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
    ],
  },
];
