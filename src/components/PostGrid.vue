<template>
  <div class="grid-container">
    <v-divider />
    <v-subheader inset class="caps">
      {{ title }}
      <span v-if="showCount">&nbsp;({{posts.length}} entries)</span>
    </v-subheader>
    <v-divider />
    <v-progress-linear v-if="loading" indeterminate />
    <p v-else-if="!posts.length" id="no-results">No results found.</p>
    <v-row id="grid" v-else align-content="center" justify="center">
      <v-col v-for="post in posts" :key="post.titleEn" cols="12" md="6" lg="4" xl="3">
        <MTRCard v-if="post.tags.includes('MTR')" :post="post" />
        <PostCard v-else :post="post" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from './PostCard';
import MTRCard from './MTRCard';

export default {
  name: 'PostGrid',
  components: {
    PostCard,
    MTRCard,
  },
  data() {
    return {
      loading: false,
      posts: [],
    };
  },
  props: {
    title: String,
    fetchUrl: String,
    showCount: Boolean,
  },
  created() {
    this.fetchApi(this.fetchUrl);
  },
  watch: {
    fetchUrl(val) {
      this.fetchApi(this.fetchUrl);
    },
  },
  methods: {
    fetchApi(url) {
      if (url === undefined || url === null || url === '') return;
      this.loading = true;
      fetch(url, {
        method: 'GET',
        cache: 'default',
      })
        .then(response => response.json())
        .then((json) => {
          this.posts = json;
          this.loading = false;
        })
        .catch(error => console.error('Backend Error:', error));
    },
  },
};
</script>

<style scoped>
.grid-container {
  padding-bottom: 12px;
}

.caps {
  text-transform: capitalize;
}

#grid {
  padding-top: 12px;
}

#no-results{
  margin: 2em auto;
}
</style>
