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

<script>
import client from "@/services/oauthService";
import store from "@/store/index";

export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    onSubmit(event, form) {
      const router = this.$router;

      store.state.processing = true;
      client.ownerPassword(this.email, this.password).then(token => {
        store.state.processing = false;
        if (token.isValid) {
          router.push("/");
        } else {
          store.state.errors.push(token.description);
        }
      });
    }
  }
};
</script>