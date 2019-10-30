<template>
  <v-app-bar bottom fixed height="84px">
    <v-toolbar-title class="d-none d-md-flex">
      The Literal Chinese Dictionary
      <span class="grey--text d-none d-lg-flex">&nbsp;| 直譯詞典</span>
    </v-toolbar-title>
    <v-spacer class="d-none d-md-flex" />
    <SearchBox />
    <v-spacer />
    <InstagramBadge />
  </v-app-bar>
</template>

<script>
import InstagramBadge from "./InstagramBadge.vue";
import SearchBox from "./SearchBox.vue";

export default {
  name: "Toolbar",
  components: {
    InstagramBadge,
    SearchBox
  }
};
</script>

<style>
</style>