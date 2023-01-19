<template>
  <v-app>
    <v-main class="d-flex auth">
      <router-view />
      <!-- <Confirmation /> -->
    </v-main>
  </v-app>
</template>
<script>
// import Confirmation from "@/packages/dashboard/plugins/confirmtion/Confirmation.vue";
export default {
  name: "AuthLayout",
  // components: { Confirmation },
};
</script>
<style scoped></style>
