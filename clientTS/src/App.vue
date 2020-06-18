<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const default_layout = "empty";

@Component
export default class App extends Vue {
  get layout(): string {
      return (this.$route.meta.layout || default_layout) + "-layout";
  }
}
</script>
