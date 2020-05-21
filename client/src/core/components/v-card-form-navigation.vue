<template>
  <v-card class="elevation-12">
    <v-overlay-processing />
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title color="white">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <slot />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text small>
          <router-link :to="navigationUrl">{{ navigationText }}</router-link>
        </v-btn>
        <v-spacer />
        <v-btn color="primary" @click="handleSubmit(onClick)">{{ saveButtonTitle }}</v-btn>
      </v-card-actions>
    </ValidationObserver>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    navigationUrl: {
      type: String,
      default: ""
    },
    navigationText: {
      type: String,
      default: ""
    },
    saveButtonTitle: {
      type: String,
      default: "Save"
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event, this.$refs.form);
    }
  }
};
</script>

<style>
</style>