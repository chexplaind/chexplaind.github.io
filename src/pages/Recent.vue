<template>
    <PostGrid
      title="Recent Posts"
      :fetchUrl="constants.apiBaseUrl + constants.apiGetLatestsPath + 12"
    />
</template>

<script>
import PostGrid from '../components/PostGrid.vue';
import constants from '../constants';
import store from '../store';

export default {
  name: 'Recent',
  components: {
    PostGrid,
  },
  data() {
    return {
      constants,
    };
  },
  created() {
    store.clearSearchUrl();
  },
};
</script>

<style scoped>
</style>
