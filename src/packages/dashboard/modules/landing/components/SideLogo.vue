<template>
  <v-card
    flat
    height="100vh"
    class="mx-auto d-flex flex-column justify-center"
    elevation="0"
    color="primary"
  >
    <div class="login-photo mx-auto">
      <v-img src="../assets/login.svg"></v-img>
      <p class="font justify-center text-wrap mt-3">
        <span>
          Say goodbye to manual writting and submitting of examination questions
          and hello to automatic uploads
        </span>
        <br />
        <span>
          Login to your account and start using the portal to create questions.
        </span>
      </p>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "SideLogo",
};
</script>
<style scoped>
.login-photo {
  max-width: 500px;
  color: rgb(205, 205, 205);
}
</style>
