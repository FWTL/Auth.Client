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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RegisterUser } from "@/api/fwtl/index";
import { ACTIONS, ModuleAction } from "@/modules/Account/Store/action-types";

@Component
export default class Register extends Vue {
  private email = "";
  private password = "";
  private repeatPassword = "";

  public async onSubmit(): Promise<void> {
    const registerUser: RegisterUser = {
      email: this.email,
      password: this.password,
      repeatPassword: this.repeatPassword,
    };

    await this.$store.dispatch(ModuleAction(ACTIONS.REGISTER_USER), registerUser);
    console.log("DERP");
  }
}
</script>
