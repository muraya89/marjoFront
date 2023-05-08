import AuthLayout from "./views/AuthLayout.vue";
import Login from "./components/Login.vue";
import signup from "./components/Signup.vue"
import ForgotPassword from "./components/ForgotPassword.vue";

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
      {
        path: "forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
      },
      {
        path: "/dashboard/signup",
        name: "Signup",
        component: signup,
      },
    ],
  },
];
