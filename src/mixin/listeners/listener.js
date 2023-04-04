import AuthService from "../../packages/auth/AuthService";

const listener = {
  mounted: function () {
    Event.$on("Error", (message) => {
      this.$toast.error(message, {
        position: "top",
      });
    });

    Event.$on("ApiSuccess", (message) => {
      this.$toast.success(message, {
        position: "top-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    });

    Event.$on("route-change", (name) => {
      this.$router.replace({ name: name });
    });

    Event.$on("signup-verify", (payload) => {
      this.$verify.show({
        title: "Account OTP Verification",
        payload: {
          name: payload.user.first_name + " " + payload.user.first_name,
          phone: payload.user.phone_number,
          email: payload.user.email,
        },
        onVerify: () => {
          AuthService.login(payload.token, payload.user);
          window.location.href = "/";
        },
      });
    });
  },
};
export default listener;
