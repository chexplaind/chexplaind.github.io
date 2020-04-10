<template>
  <v-app-bar bottom fixed height="84px">
    <v-toolbar-title class="d-none d-md-flex">
      <router-link :to="{ name: 'home'}">
        The Literal Chinese Dictionary
        <span class="grey--text d-none d-lg-inline-flex"> | 直譯詞典</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer class="d-none d-md-flex" />
    <v-icon>{{mdiMagnify}}</v-icon>
    <SearchBox />
    <v-spacer />
    <InstagramBadge />
  </v-app-bar>
</template>

<script>
import { mdiMagnify } from '@mdi/js';
import InstagramBadge from './InstagramBadge.vue';
import SearchBox from './SearchBox.vue';

export default {
  name: 'Toolbar',
  components: {
    InstagramBadge,
    SearchBox,
  },
  data() {
    return {
      mdiMagnify,
    };
  },
};
</script>

<style scoped>
a:link {
  color: default;
  text-decoration: none;
}
</style>
