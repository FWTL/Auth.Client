<template>
  <v-app class="accent">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <processing-overlay></processing-overlay>
              <ValidationObserver ref="form" v-slot="{  }">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Registration</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field-validation
                      v-model="email"
                      label="Email"
                      prepend-icon="mdi-email"
                      type="email"
                      rules="required|email"
                    ></v-text-field-validation>

                    <v-text-field-validation
                      v-model="password"
                      label="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      rules="required|min:8"
                    ></v-text-field-validation>

                    <v-text-field-validation
                      v-model="repeatPassword"
                      label="Repeat Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      rules="required|confirmed:password,password"
                    />
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="onSubmit">Register</v-btn>
                </v-card-actions>
              </ValidationObserver>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { UsersApi, RegisterUser } from "../api/auth/src/index";
import store from "../store/index";

export default {
  data: () => ({
    email: "",
    password: "",
    repeatPassword: ""
  }),
  methods: {
    onSubmit() {
      var user = new RegisterUser();
      user.email = this.email;
      user.password = this.password;
      user.repeatPassword = this.repeatPassword;

      var userService = new UsersApi();
      var form = this.$refs.form;

      this.$decorateResponse(
        callback => userService.apiUsersPost({ registerUser: user }, callback),
        data => {
          console.log(data);
        },
        this.$refs.form
      );
    }
  }
};
</script>