<template>
  <v-content class="accent">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" md="8">
          <VStepperNewUser></VStepperNewUser>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import VStepperNewUser from "@/components/steppers/v-stepper-new-user";

export default {
  components: {
    VStepperNewUser
  },
  data: () => ({
    steps: 1,
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>