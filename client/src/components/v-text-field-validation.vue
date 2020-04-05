<template>
  <ValidationProvider v-slot="{ errors }" :name="$attrs.label.toLowerCase().split(' ').join('')" :rules="rules">
    <v-text-field
      v-model="innerValue"
      :class="required"
      :error-messages="errors"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </ValidationProvider>
</template>

<script>
export default {
  name: "VTextFieldValidation",
  props: {
    rules: {
      type: [Object, String],
      default: "required"
    },
    // must be included in props
    //eslint-disable-next-line vue/require-default-prop
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