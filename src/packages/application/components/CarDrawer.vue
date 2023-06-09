<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      right
      fixed
      height="100%"
      width="400"
      temporary
      v-click-outside="onClickOutSide"
    >
      <v-card>
        <v-spacer></v-spacer>
        <v-icon color="error">mdi-close</v-icon>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "CarDrawer",
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    Event.$on("openDrawer", () => {
      setTimeout(() => {
        this.drawer = true;
      }, 200);
    });
  },
  methods: {
    onClickOutSide() {
      if (!this.drawer) return;
      setTimeout(() => {
        if (this.drawer) this.drawer = false;
      }, 200);
    },
  },
};
</script>
