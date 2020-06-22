<template>
  <v-card class="elevation-12">
    <v-overlay-processing />
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title color="white">aaa</v-toolbar-title>
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
        <v-btn color="primary" @click="handleSubmit(onClick)"></v-btn>
      </v-card-actions>
    </ValidationObserver>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class VCardForm extends Vue {
  // // @Prop() 
  // // public title: string;
  // // @Prop() 
  // // public saveButtonTitle: string;

  // // constructor() {
  // //   super();
  // //   // this.title = "";
  // //   // this.saveButtonTitle = "";
  // // }

  // private innerValue: any;
  // private required = "";

  // public onClick(): void {
  //   this.$emit("click", event, this.$refs.form);
  // }
}
</script>
