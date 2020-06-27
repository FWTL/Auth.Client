<template>
  <ValidationProvider
    v-slot="{ errors }"
    :name="
      $attrs.label
        .toLowerCase()
        .split(' ')
        .join('')
    "
    :rules="rules"
  >
    <v-text-field v-model="innerValue" :class="required" :error-messages="errors" v-bind="$attrs" v-on="$listeners" />
  </ValidationProvider>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class VTextFieldValidation extends Vue {
  @Prop() readonly rules: string;
  @Prop() value: unknown;

  private innerValue: unknown = "";
  private required = "";

  @Watch("value")
  valueChanged(newVal: unknown) {
    this.innerValue = newVal;
  }

  @Watch("innerValue")
  innerValueChanged(newVal: unknown) {
    this.$emit("input", newVal);
  }

  created() {
    if (this.value) {
      this.innerValue = this.value;
    }

    if (this.rules.includes("required")) {
      this.required = "required";
    }
  }
}
</script>

<style>
.required label::after {
  content: " *";
  color: #df323b;
}
</style>
