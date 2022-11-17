<template>
  <v-app>
    <v-app-bar color="transparent" class="px-15">
      <v-toolbar-title class="">
        <span id="heading">MARJO cabs services</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link
        class="text-capitalize text-decoration-none text-overline"
        :to="{ name: 'Login' }"
      >
        About
      </router-link>

      <v-spacer />
      <router-link
        class="text-capitalize text-decoration-none text-overline mr-5"
        :to="{ name: 'Login' }"
      >
        Login
      </router-link>

      <v-btn
        depressed
        rounded
        color="primary"
        @click="$router.replace({ name: 'Signup' })"
      >
        Create Account
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view name="dashboard" />
      <router-view name="auth" />
    </v-main>
  </v-app>
</template>

<script>
// import Signup from "../../auth/components/Signup.vue";

export default {
  name: "dashboardLayout",
  // components: { Signup },
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    links() {
      return this.$store.getters["Dashboard/links"]
        .filter((item) => !item.disabled && item.title !== "Administration")
        .map((link) => {
          link.sublinks = link.sublinks || [];
          return link;
        });
    },
    dialog: {
      get() {
        return this.$store.getters["Auth/authGetters"]("modal");
      },
      set(val) {
        this.$store.dispatch("Auth/openModal", val);
      },
    },
  },
};
</script>
<style scoped>
#heading {
  /* font-family: Brush Script MT, Brush Script Std, cursive; */
  font-size: 35px;
}
</style>
