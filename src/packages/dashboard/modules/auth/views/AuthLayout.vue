<template>
  <v-app>
    <v-main class="d-flex auth">
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "AuthLayout",
};
</script>
<style scoped></style>
