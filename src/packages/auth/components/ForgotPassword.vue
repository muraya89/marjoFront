<template>
  <v-app>
    <v-container class="pagewrap fill-height">
      <v-card class="mx-auto">
        <div class="pagewrap-overlay" color="secondary"></div>

        <v-card-text class="pa-0">
          <div class="header">
            <div class="header-content">
              <h1><span class="taxi">MARJO CABS SERVICES</span></h1>
            </div>
          </div>
          <div class="text-center mx-15">
            <v-avatar color="secondary" class="mt-3">
              <span>MCS</span>
            </v-avatar>
            <p class="mt-1">No worries we'll send you reset instructions</p>
            <form>
              <v-text-field
                v-model="formData.email"
                :rules="rules.email"
                @copy.prevent
                outlined
                class="mt-3"
                label="Email Address"
                placeholder="Enter your Email Address"
                prepend-inner-icon="email"
                autocomplete="false"
                @keyup.enter="login()"
              />
            </form>
          </div>
        </v-card-text>
        <v-row class="justify-center">
          <!-- <v-btn text color="primary" :to="{ name: 'Login' }">
            <v-icon class="mr-2" small>mdi-arrow-left</v-icon>
            <span>Back to login</span>
          </v-btn> -->
          <router-link
            :to="{ name: 'Login' }"
            class="mt-1 text-decoration-none"
          >
            <v-icon class="mr-1" color="primary">mdi-arrow-left</v-icon>
            Back to login
          </router-link>
        </v-row>
        <v-card-actions class="button">
          <v-btn color="primary" class="mx-auto" x-large>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      showPassword: false,
      formData: {
        email: "",
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
