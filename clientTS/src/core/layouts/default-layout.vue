<template>
  <v-app>
    <v-app-bar app class="primary" dark>
      <v-toolbar-title>Fun With Telegram</v-toolbar-title>

      <v-spacer />

      <v-toolbar-items>
        <v-divider inset vertical />

        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>

        <v-divider inset vertical />

        <v-btn icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>

        <v-divider inset vertical />
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <slot />

    <v-footer color="primary" app dark>
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";

@Component
export default class DefaultLayout extends Vue {
  private year: number = moment().year();
}
</script>
