<template>
  <empty-layout>
    <v-overlay-processing></v-overlay-processing>
  </empty-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const defaultLayout = "empty";

@Component
export default class App extends Vue {
  get layout(): string {
      return "empty-layout";
  }

  created() {
    console.log(this.$route, this.$route.meta.layout);
  }
  
  updated() {
    console.log(this.$route, this.$route.meta.layout);
  }
}
</script>
