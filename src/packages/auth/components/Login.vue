<template>
  <v-app>
    <v-container class="pagewrap fill-height">
      <v-card class="mx-auto">
        <div class="pagewrap-overlay" color="secondary"></div>

        <v-card-text class="pa-0">
          <div class="header">
            <div class="header-content d-flex">
              <v-btn text dark :to="{ name: 'landingPage' }">
                <v-icon class="mr-1">mdi-arrow-left</v-icon>
                <span>Back</span>
              </v-btn>
              <h1><span class="taxi">MARJO CABS SERVICES</span></h1>
            </div>
          </div>
          <div class="text-center px-15">
            <v-avatar color="secondary" class="mt-3">
              <span>MCS</span>
            </v-avatar>
            <p class="ma-2 pa-1">LOGIN TO CONTINUE</p>
            <v-form>
              <v-text-field
                ref="email"
                v-model="formData.email"
                @copy.prevent
                outlined
                label="Email Address"
                placeholder="Enter your Email Address"
                prepend-inner-icon="email"
                :rules="rules.email"
                autocomplete="false"
                @keyup.enter="login()"
              />

              <v-text-field
                ref="password"
                v-model="formData.password"
                outlined
                @copy.prevent
                label="Password"
                placeholder="Enter your password"
                prepend-inner-icon="vpn_key"
                :type="showPassword ? 'text' : 'password'"
                :rules="rules.password"
                autocomplete="false"
                @keyup.enter="login()"
              >
                <template v-slot:append>
                  <v-btn @click="showPassword = !showPassword" icon>
                    <v-icon>{{
                      showPassword ? "visibility" : "visibility_off"
                    }}</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
              <div class="d-flex align-center justify-space-between flex-wrap">
                <v-checkbox label="Remember Me" hide-details class="me-3 mt-1">
                </v-checkbox>
                <!-- forgot link -->
                <router-link
                  :to="{ name: 'ForgotPassword' }"
                  class="mt-1 text-decoration-none"
                  >Forgot Password?
                </router-link>
              </div>
            </v-form>
            <div class="d-flex justify-start mt-2">
              <span class="mt-1 mr-1">Already a member?</span>
              <router-link
                :to="{ name: 'Signup' }"
                class="mt-1 text-decoration-none"
                >Create an account
              </router-link>
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="button">
          <v-btn color="primary" class="mx-auto" x-large>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        email: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        password: [(v) => !!v || "Password is required"],
      };
    },
  },
};
</script>
<style scoped>
.header {
  background-color: #004d40;
  width: 100%;
  height: 150px;
  text-align: center;
  position: relative;
}

.header:after {
  content: "";
  position: absolute;
  bottom: -11px;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #fff;
  z-index: 2;
  transform: skewY(-2deg);
}

header h1 {
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
}

.header-content {
  position: absolute;
  top: 40%;
  left: 10%;
  transfrom: translate(-50%, -50%);
  color: #fff;
}

header h1:before {
  content: "\f053";
  font-family: FontAwesome;
  font-size: 0.8em;
  position: absolute;
  left: -200px;
  top: 10px;
  color: #ddd;
  cursor: pointer;
}

header h1:after {
  content: "\f0c9";
  font-family: FontAwesome;
  font-size: 0.8em;
  position: absolute;
  left: 290px;
  top: 10px;
  color: #ddd;
  cursor: pointer;
}

.taxi {
  font-weight: 600;
}

.pagewrap {
  max-width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.pagewrap-overlay {
  background-color: #c92;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.button {
  text-align: center;
  position: relative;
  top: 35px;
}
</style>
