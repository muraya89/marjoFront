<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar color="primary">
      <v-toolbar-title class="white--text">
        <span id="heading">MARJO cabs services</span>
      </v-toolbar-title>
      <v-spacer />
      <router-link
        class="white--text text-capitalize text-decoration-none text-overline"
        :to="{ name: 'Login' }"
        >About</router-link
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "dashboardLayout",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    links() {
      return this.$store.getters["Dashboard/links"]
        .filter((item) => !item.disabled && item.title !== "Administration")
        .map((link) => {
          link.sublinks = link.sublinks || [];
          return link;
        });
    },
  },
};
</script>
<style scoped>
#heading {
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-size: 35px;
}
</style>
