<template>
  <div>
    <v-app-bar app class="primary" dark>
      <v-toolbar-title>Fun With Telegram</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="mr-5">
        <v-avatar class="mr-3">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <span class="subheading">Andrzej Golaszewski</span>
      </div>

      <v-toolbar-items>
        <v-divider inset vertical></v-divider>

        <v-btn icon>
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>

        <v-divider inset vertical></v-divider>

        <v-btn icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>

        <v-divider inset vertical></v-divider>
      </v-toolbar-items>

      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <slot></slot>

    <v-footer color="primary" app dark>
      <span>&copy; {{ year }}</span>
    </v-footer>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    year: moment().year()
  })
};
</script>

