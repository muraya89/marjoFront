<template>
  <v-app>
    <v-app-bar app color="transparent" class="px-15" elevation="0">
      <v-toolbar-title class="">
        <span id="heading">MARJO cabs services</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-row>
        <!-- home -->
        <v-col cols="3">
          <router-link
            class="text-capitalize text-decoration-none text-overline"
            :to="{ name: 'landingPage' }"
          >
            Home
          </router-link>
        </v-col>
        <!-- about -->
        <v-col cols="3">
          <router-link
            class="text-capitalize text-decoration-none text-overline"
            :to="{ name: '' }"
          >
            About
          </router-link>
        </v-col>
        <!-- booking -->
        <v-col cols="3">
          <router-link
            class="text-capitalize text-decoration-none text-overline"
            :to="{ name: 'ApplicationDashboard' }"
          >
            Booking
          </router-link>
        </v-col>
        <!-- booking history -->
        <v-col cols="3">
          <router-link
            class="text-capitalize text-decoration-none text-overline"
            :to="{ name: 'BookingHistory' }"
          >
            History
          </router-link>
        </v-col>
      </v-row>

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

      <div v-else class="d-flex">
        <v-icon class="mx-3">mdi-bell-outline</v-icon>
        <v-icon class="mx-3">mdi-cog-outline</v-icon>
        <!-- <span class="mt-1">
          {{ `${profile.first_name} ${profile.last_name}` }}
        </span> -->

        <v-menu offset-y offset-x style="left: 1250px">
          <template v-slot:activator="{ on, attrs }">
            <div
              v-on="on"
              :attrs="attrs"
              class="d-flex flex-row"
              style="cursor: pointer"
            >
              <v-avatar color="grey" size="30" class="ml-3 mt-1">
                <v-avatar size="22">
                  <v-img v-if="profile.avatar" :src="profile.avatar" />

                  <v-img v-else>
                    <v-icon dark size="30">mdi-account</v-icon>
                  </v-img>
                </v-avatar>
              </v-avatar>

              <v-icon class="mt-1 ml-1" small> mdi-chevron-down </v-icon>
            </div>
          </template>

          <v-card class="px-4" flat width="200">
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
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <router-view name="dashboard" />
      <router-view name="view" />
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
          action: "profile",
          order: 1,
          icon: "mdi-account-outline",
          disabled: false,
          iconColor: "blue",
          text: "Profile",
        },
        {
          action: "logout",
          order: 2,
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
        // v.$router.push({ name: "ApplicationDashboard" });
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
