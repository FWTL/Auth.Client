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

<script>
import moment from "moment";
export default {
  data: () => ({
    year: moment().year()
  })
};
</script>

