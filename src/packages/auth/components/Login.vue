<template>
  <v-app>
    <v-container class="pagewrap fill-height">
      <v-row
        no-gutters
        align="center"
        justify="center"
        style="background-color: #f8f8f8"
      >
        <v-col cols="12" md="5" align="center">
          <v-card
            class="mx-sm-auto mx-md-10"
            flat
            style="background-color: #f8f8f8"
          >
            <div
              class="pagewrap-overlay"
              color="secondary"
              v-if="$vuetify.breakpoint.mdAndUp"
            ></div>

            <v-card-text class="pa-0">
              <!-- <div class="header">
            <div class="header-content d-flex">
              <v-btn text dark :to="{ name: 'landingPage' }">
                <v-icon class="mr-1">mdi-arrow-left</v-icon>
                <span>Back</span>
              </v-btn>

              <h1><span class="taxi">MARJO CABS SERVICES</span></h1>
            </div>
          </div> -->

              <div class="text-center px-15">
                <v-avatar color="secondary" size="125" class="mt-3">
                  <span class="text-h3">MCS</span>
                </v-avatar>
                <p class="ma-2 pa-1 text-h5">welcome back</p>
                <v-form>
                  <v-text-field
                    ref="email"
                    v-model="formData.email"
                    @copy.prevent
                    outlined
                    dense
                    label="Email Address"
                    placeholder="Enter your Email Address"
                    :rules="rules.email"
                    autocomplete="false"
                    @keyup.enter="login()"
                  />

                  <v-text-field
                    ref="password"
                    v-model="formData.password"
                    outlined
                    dense
                    @copy.prevent
                    label="Password"
                    placeholder="Enter your password"
                    :rules="rules.password"
                    autocomplete="false"
                    @keyup.enter="login()"
                  />

                  <div
                    class="d-flex align-center justify-space-between flex-wrap"
                  >
                    <v-checkbox
                      label="Remember Me"
                      hide-details
                      class="me-3 mt-1"
                    >
                    </v-checkbox>
                    <!-- forgot link -->
                    <router-link
                      :to="{ name: 'ForgotPassword' }"
                      class="mt-1 text-decoration-none"
                      >Forgot Password?
                    </router-link>
                  </div>
                </v-form>
              </div>
            </v-card-text>

            <v-card-actions class="px-15 d-flex flex-column">
              <v-btn block color="primary" class="mx-auto" @click="login">
                Login
              </v-btn>
              <v-container class="d-flex flex-column my-5 px-0">
                <div class="d-flex flex-row">
                  <v-divider class="my-auto"></v-divider>
                  <span class="mx-3">Or </span>
                  <v-divider class="my-auto"></v-divider>
                </div>

                <v-btn block outlined class="mt-6">
                  <v-img
                    max-width="16"
                    max-height="16"
                    class="mr-3 text-capitalize"
                    :src="require('../../../assets/googleicon.svg')"
                  ></v-img>
                  Continue with Google
                </v-btn>
              </v-container>
            </v-card-actions>

            <div class="d-flex justify-center mt-2">
              <span class="mt-1 mr-1">Don't have an account?</span>
              <router-link
                :to="{ name: 'Signup' }"
                class="mt-1 text-decoration-none"
              >
                Sign up
              </router-link>
            </div>
          </v-card>
        </v-col>

        <v-col cols="7" v-if="$vuetify.breakpoint.mdAndUp">
          <v-img
            max-height="100vh"
            max-width="100wh"
            src="https://images.unsplash.com/photo-1515595967223-f9fa59af5a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </v-col>
      </v-row>
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
  methods: {
    login() {
      this.$store.dispatch("Auth/login", this.formData);
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
  padding: 0%;
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
