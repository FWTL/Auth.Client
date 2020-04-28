<template>
  <v-app>
    <v-app-bar app class="primary" dark>
      <v-toolbar-title>Fun With Telegram</v-toolbar-title>

      <v-spacer />

      <VPanelUser></VPanelUser>

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

    <slot></slot>

    <v-footer color="primary" app dark>
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import moment from "moment";
import VPanelUser from "@/components/panels/v-panel-user";

export default {
  components: {
    VPanelUser
  },
  data: () => ({
    year: moment().year()
  })
};
</script>

