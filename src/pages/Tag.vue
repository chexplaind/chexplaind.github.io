<template>
  <div>
    <h2 class="breadcrumbs subtitle-2">
      <router-link :to="{ name: 'home'}">Home</router-link>&nbsp;>&nbsp;Tag
    </h2>
    <PostGrid :title="expandTag(tag)" :fetchUrl="tagUrl" showCount />
  </div>
</template>

<script>
import PostGrid from '../components/PostGrid.vue';
import constants from '../constants';
import store from '../store';

export default {
  name: 'Tag',
  components: {
    PostGrid,
  },
  watch: {
    $route(to, from) {
      store.clearSearchUrl();
      this.refreshTag(to);
    },
  },
  computed: {
    tagUrl() {
      return constants.apiBaseUrl + constants.apiGetByTagPath + this.tag;
    },
  },
  data() {
    return {
      constants,
      tag: '',
    };
  },
  created() {
    store.clearSearchUrl();
    this.refreshTag(this.$route);
  },
  methods: {
    refreshTag(to) {
      const { tagName } = to.params;
      if (tagName) {
        this.tag = tagName;
      }
    },
    expandTag(tagName) {
      tagName = tagName.replace('_', ' ');
      if (tagName === 'E2C') { return 'E-to-C: Translated from Foreign Language to Chinese'; }
      if (tagName === 'C2E') { return 'C-to-E: Translated from Chinese to English'; }
      return tagName;
    },
  },
};
</script>

<style scoped>
.breadcrumbs {
  text-align: left;
  font-size: 0.75em;
}
</style>
