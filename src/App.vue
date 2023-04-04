<template>
  <div style="overflow-y: scroll; max-height: 100vh">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./layouts/dashboard/Footer.vue";
export default {
  name: "App",
  components: { Footer },
  data: () => ({
    //
  }),
  // computed: {
  //   isIdle() {
  //     return this.$store.state.idleVue.isIdle;
  //   },
  // },
};
</script>
