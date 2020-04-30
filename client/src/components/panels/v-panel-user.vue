<template>
  <div style="display: contents">
    <v-avatar v-if="!!avatarUrl" class="mr-3">
      <img :src="avatarUrl" alt="John" />
    </v-avatar>
    <v-avatar v-else :color="avatarColor" class="mr-3">
      <span class="white--text headline">{{ usernameAbr }}</span>
    </v-avatar>

    <div class="subheading mr-5">{{ userName }}</div>
  </div>
</template>

<script>
export default {
  name: "VPanelUser",
  data() {
    return {
      userName: "",
      avatarUrl: ""
    };
  },
  computed: {
    avatarColor: function() {
      return stringToHslColor(this.userName, 30, 80);
    },
    usernameAbr: function() {
      var abr = this.userName.split(" ");
      if (abr.length === 1) {
        abr.push(
          this.userName
            .slice(this.userName.length / 2)
            .charAt(0)
            .toUpperCase()
        );
      }
      return abr[0].charAt(0).toUpperCase() + abr[1].charAt(0).toUpperCase();
    }
  },
  async created() {
    await this.$store.dispatch("user/usersMeGet");
    console.log(this.$store.state.user.me);
  }
};

function stringToHslColor(str, s, l) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}
</script>

