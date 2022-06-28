import AuthLayout from "./views/AuthLayout.vue";
import Login from "./components/Login.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import Signup from "../landing/components/Signup.vue";

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
        path: "signup",
        name: "Signup",
        component: Signup,
      },
    ],
  },
];
