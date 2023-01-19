<template>
  <v-dialog persistent v-model="OtpDialog" max-width="400px">
    <v-card class="mx-auto">
      <v-app-bar dense elevation="0" color="primary">
        <div class="white--text">{{ params.title }}</div>
      </v-app-bar>
      <v-card-text class="mt-5 d-flex justify-center">
        <div style="max-width: 320px">
          <v-alert
            :type="alert.type"
            v-model="showAlert"
            dense
            outlined
            dismissible
            prominent
          >
            {{ alert.message }}
          </v-alert>
          <div class="ma-auto position-relative">
            <div>Enter OTP Code</div>
            <v-otp-input
              v-model="otpCode"
              length="5"
              :disabled="loading"
              @finish="verifyOtp"
              type="number"
            ></v-otp-input>
            <v-overlay absolute color="grey lighten-4" light :value="loading">
              <v-progress-circular
                indeterminate
                size="50"
                width="3"
                color="primary"
              ></v-progress-circular>
            </v-overlay>
            <div class="d-flex flex-column align-end">
              <div class="d-flex flex-row">
                <div class="text-caption mt-1">Didn't receive the code?</div>
                <v-btn text color="orange lighten-1" small @click="resendCode">
                  <v-icon class="ml-1">sync</v-icon>
                  Resend Code
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "OtpVerification",
  data: function () {
    return {
      OtpDialog: false,
      otpCode: "",
      params: {
        title: "",
        payload: {},
        onVerify: {},
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  mounted() {
    Event.$on("showVerify", (params) => {
      this.$store.dispatch("OTP/sendOTP", params.payload);
      this.params = params;
    });
    Event.$on("showDialog", () => {
      this.show();
    });
    Event.$on("onVerify", () => {
      this.params.onVerify();
      this.OtpDialog = false;
      this.$router.push({ name: "ApplicationTabs" });
    });
  },
  computed: {
    loading: function () {
      return this.$store.getters["OTP/loading"];
    },
    alert: function () {
      return this.$store.getters["OTP/alert"];
    },
    showAlert: {
      get() {
        return this.alert.show;
      },
      set(value) {
        this.$store.dispatch("OTP/setAlert", {
          type: "info",
          message: "",
          show: value,
        });
      },
    },
  },
  methods: {
    show: function () {
      this.OtpDialog = true;
      this.$store.dispatch("OTP/setAlert", {
        type: "info",
        message: "Check your phone/email for the OTP code",
        show: true,
      });
      this.otpCode = "";
    },
    verifyOtp: function () {
      if (this.otpCode.length !== 0)
        this.$store.dispatch("OTP/verifyOtp", {
          otpCode: this.otpCode,
          payload: this.params.payload,
        });
    },
    resendCode: function () {
      this.otpCode = "";
      this.$store.dispatch("OTP/resendOtp", this.params.payload);
    },
  },
};
</script>
<style>
@import url("./styles.css");
</style>
