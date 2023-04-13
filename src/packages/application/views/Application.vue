<template>
  <v-container>
    <router-view name="dashboard" />
    <router-view name="view" />
  </v-container>
</template>
<script>
export default {
  name: "Application",
};
</script>
