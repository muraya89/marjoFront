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
export default {
  name: "AuthLayout",
  components: { Spinner },
};
</script>
<style scoped></style>
