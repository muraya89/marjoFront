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

      <div v-if="!loggedIn">
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
      </div>

      <div v-else>
        <span>{{ `${profile.first_name} ${profile.last_name}` }}</span>

        <v-avatar color="grey" size="50" class="ml-3">
          <v-avatar size="42">
            <v-img v-if="profile.avatar" :src="profile.avatar" />

            <v-img v-else src="@/assets/Mercedes.jpg"></v-img>
          </v-avatar>
        </v-avatar>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-on="on" :attrs="attrs" class="mt-6" small>
              mdi-chevron-down
            </v-icon>
          </template>

          <v-list dense>
            <v-list-item
              dense
              v-for="(sub, i) in toolBarTopLinks"
              :key="i"
              :disabled="sub.disabled"
              link
              @click="dispatchAction(sub.action)"
            >
              <v-list-item-icon>
                <v-icon>{{ sub.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title>{{ sub.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <router-view name="dashboard" />
      <router-view name="auth" />
      <Spinner />
    </v-main>
  </v-app>
</template>

<script>
import Spinner from "../../plugins/loader/views/Spinner.vue";
import AuthService from "@/packages/auth/AuthService";

export default {
  name: "dashboardLayout",
  components: { Spinner },
  data() {
    return {
      drawer: false,
      group: null,
      toolBarTopLinks: [
        {
          action: "logout",
          order: 1,
          icon: "logout",
          disabled: false,
          iconColor: "green",
          text: "Logout",
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((v) => {
      if (AuthService.check()) {
        v.$store.dispatch("Dashboard/profile");
      }
    });
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
    loggedIn() {
      return AuthService.check();
    },
    profile() {
      return this.$store.getters["Dashboard/dashboardGetters"]("profile");
    },
  },
  methods: {
    dispatchAction(action) {
      this.$store.dispatch(`Auth/${action}`);
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
