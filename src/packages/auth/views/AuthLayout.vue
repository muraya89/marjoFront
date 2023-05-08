<template>
  <v-app>
    <v-main class="d-flex auth">
      <router-view />
      <Spinner />
      <!-- <Confirmation /> -->
    </v-main>
  </v-app>
</template>
<script>
// import Confirmation from "@/packages/dashboard/plugins/confirmtion/Confirmation.vue";
import Spinner from "../../../plugins/loader/views/Spinner.vue";
import AuthService from "../AuthService";
export default {
  name: "AuthLayout",
  components: { Spinner },
  beforeRouteEnter(to, from, next) {
    next((v) => {
      if (AuthService.check()) {
        v.$router.push({ name: "ApplicationDashboard" });
      }
    });
  },
};
</script>
<style scoped></style>
