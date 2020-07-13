<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card-form title="Login" save-button-title="Login" @click="onSubmit">
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
        </v-card-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ACTIONS } from "../Store/action-types";
import { LoginModel } from "../../../api/auth/index"

@Component
export default class Login extends Vue {
  private email = "";
  private password = "";

  public async onSubmit(): Promise<void> {
    const login: LoginModel = {
      username: this.email,
      password: this.password
    };

    await this.$store.dispatch(ACTIONS.LOGIN_USER, login);
  }
}
</script>
