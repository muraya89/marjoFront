<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
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
    </v-navigation-drawer>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">MARJO</v-toolbar-title>
    </v-app-bar>
    <v-divider />
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
};
</script>
