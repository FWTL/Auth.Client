

<template>
  <div>
    <v-fade-transition>
      <v-overlay v-if="$store.state.processing" absolute color="#333">
        <v-progress-circular color="primary" :size="70" :opacity="0.1" :width="7" indeterminate></v-progress-circular>
      </v-overlay>
    </v-fade-transition>

    <v-fade-transition>
      <v-overlay v-if="$store.state.errors.length" absolute color="#333">
        <v-alert v-for="error in $store.state.errors" :key="error" type="error">{{ error }}</v-alert>
        <div class="text-center">
          <v-btn color="primary" center @click="onClose">Ok</v-btn>
        </div>
      </v-overlay>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlay: false
  }),
  methods: {
    onClose() {
      this.$store.state.errors = [];
    }
  }
};
</script>