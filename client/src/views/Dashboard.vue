<template>
  <v-content class="accent">
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="4" md="8">
          <v-stepper v-model="steps">
            <v-stepper-header>
              <v-stepper-step :complete="steps > 1" step="1">Set Timezone</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="steps > 2" step="2">Set Phone Number</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="steps > 3" step="3">Verify Phone Number</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-row>
                  <v-col>
                    <v-autocomplete
                      :items="items"
                      color="white"
                      label="Time Zone"
                      clearable="true"
                    ></v-autocomplete>
                  </v-col>
                </v-row>

                <v-btn color="primary" @click="steps = 2">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-row>
                  <v-col>
                    <v-text-field label="Phone Number"></v-text-field>
                  </v-col>
                </v-row>

                <v-btn color="primary" @click="steps = 3">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-row>
                  <v-col>
                    <v-text-field label="Telegram Code"></v-text-field>
                  </v-col>
                </v-row>

                <v-btn color="primary">Complate</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    steps: 1,
    items: ["Foo", "Bar", "Fizz", "Buzz"]
  })
};
</script>