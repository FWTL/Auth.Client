<template>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card-form title="Register" save-button-title="Register" @click="onSubmit">
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
          </v-card-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import { UsersApi, RegisterUser } from "@/api/auth/src/index";
import store from "../store/index";

export default {
  data: () => ({
    email: "",
    password: "",
    repeatPassword: ""
  }),
  methods: {
    onSubmit(event, form) {
      var user = new RegisterUser();
      user.email = this.email;
      user.password = this.password;
      user.repeatPassword = this.repeatPassword;

      var router = this.$router;

      this.$decorateResponse(
        callback =>
          new UsersApi().apiUsersPost({ registerUser: user }, callback),
        data => {
          router.push("login");
        },
        form
      );
    }
  }
};
</script>