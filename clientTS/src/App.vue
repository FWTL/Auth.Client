<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const defaultLayout = "empty";

@Component
export default class App extends Vue {
  get layout(): string {
    return (this.$route.meta.layout || defaultLayout) + "-layout";
  }

  created() {
    console.log(this.$route, this.$route.meta.layout);
  }

  updated() {
    console.log(this.$route, this.$route.meta.layout);
  }
}
</script>
