<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card-form
          title="Login"
          save-button-title="Login"
          @click="onSubmit"
        >
          <v-text-field-validation
            v-model="userName"
            label="Email"
            prepend-icon="mdi-email"
            type="email"
            rules="required|email"
          />

          <v-text-field-validation
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            rules="required|min:8"
          />
        </v-card-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    userName: "",
    password: ""
  }),
  methods: {
    async onSubmit(event, form) {
      await this.$store.dispatch("auth/get", {
        userName: this.userName,
        password: this.password,
        form
      });
      this.$router.push("/dashboard");
    }
  }
};
</script>