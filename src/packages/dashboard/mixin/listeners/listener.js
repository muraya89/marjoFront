const listener = {
  mounted: function () {
    Event.$on("Error", (message) => {
      this.$toast.error(message, {
        position: "top",
      });
    });
  },
};
export default listener;
