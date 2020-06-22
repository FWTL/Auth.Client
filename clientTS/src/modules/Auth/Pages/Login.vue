<template>
  <v-overlay-processing></v-overlay-processing>
</template>

<script>
export default {
  data: () => ({
    userName: "",
    password: ""
  }),
  methods: {
    // async onSubmit(event, form) {
    //   await this.$store.dispatch("auth/get", {
    //     userName: this.userName,
    //     password: this.password,
    //     form
    //   });
    //   this.$router.push("/dashboard");
    // }
  }
};
</script>