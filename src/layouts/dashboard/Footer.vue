<template>
  <v-footer app :inset="true" elevation="12" :color="color" class="overline">
    <span style="color: #000000">
      {{ appName }} @
      {{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
import { appName } from "../../environment/index";

export default {
  name: "Footer",
  props: {
    opacity: {
      type: String,
      default: "0",
    },
  },

  computed: {
    color() {
      return `rgba(255, 255, 255, ${this.opacity})`;
    },

    appName() {
      return appName;
    },
  },
};
</script>

<style scoped></style>
