<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card-form-navigation
          title="Register"
          save-button-title="Register"
          navigation-url="/login"
          navigation-text="Already have an account? Sign in"
          @click="onSubmit"
        >
          <v-text-field-validation
            v-model="email"
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

          <v-text-field-validation
            v-model="repeatPassword"
            label="Repeat Password"
            prepend-icon="mdi-lock"
            type="password"
            rules="required|confirmed:password,password"
          />
        </v-card-form-navigation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { RegisterUser } from "@/api/user/src/index";
import store from "../store/index";

export default {
  data: () => ({
    email: "",
    password: "",
    repeatPassword: ""
  }),
  methods: {
    async onSubmit(event, form) {
      var registerUser = new RegisterUser();
      registerUser.email = this.email;
      registerUser.password = this.password;
      registerUser.repeatPassword = this.repeatPassword;

      await this.$store.dispatch("user/register", { registerUser, form });
      this.$router.push("/login");
    }
  }
};
</script>