<template>
  <ValidationProvider :name="$attrs.label.toLowerCase()" :rules="rules" v-slot="{ errors }">
    <v-text-field :class="required" v-model="innerValue" :error-messages="errors" v-bind="$attrs" v-on="$listeners"></v-text-field>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    rules: {
      type: [Object, String],
      default: "required"
    },
    // must be included in props
    value: {
      type: null
    }
  },
  data: () => ({
    innerValue: "",
    required :"",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }

    if (this.rules.includes("required")) {
      this.required = "required"
    }
  }
};
</script>

<style>
.required label::after {
  content: " *";
  color: #df323b;
}
</style>