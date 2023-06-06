<template>
  <v-container fluid>
    <router-view name="view" />
    <router-view name="action" />
  </v-container>
</template>
<script>
export default {
  name: "Application",
  beforeRouteEnter(to, from, next) {
    next((v) => {
      v.$store.dispatch("Application/getCars");
    });
  },
};
</script>
