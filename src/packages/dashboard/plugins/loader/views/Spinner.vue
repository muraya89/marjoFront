<template>
  <v-overlay
    v-if="$store.getters['Dashboard/loading']"
    z-index="10"
    color="drawerBackground"
    opacity=".6"
  >
    <div class="d-flex flex-column">
      <v-progress-circular
        indeterminate
        size="40"
        width="2"
        color="loaderColor"
        class="align-self-center mt-3"
      />
    </div>
  </v-overlay>
</template>

<script>
// import { HalfCircleSpinner as spinner } from "epic-spinners";
export default {
  name: "Spinner",
  components: {
    // spinner,
  },
};
</script>

<style scoped></style>
