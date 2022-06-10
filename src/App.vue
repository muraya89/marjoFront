<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
};
</script>
