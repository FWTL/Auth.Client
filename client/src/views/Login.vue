<template>
  <v-app class="accent">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card-form title="Login" save-button-title="Login">
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
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>