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
        size="100"
        width="5"
        color="secondary"
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
  mounted() {
    console.log(this.$store.getters["Dashboard/loading"]);
  },
};
</script>

<style scoped></style>
