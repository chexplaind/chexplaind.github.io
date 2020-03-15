<template>
  <div>
    <PostCard :post="post" />
    <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-list two-line>
          <!-- <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          </template> -->
        </v-list>
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import PostCard from '../components/PostCard';
import CharacterCard from '../components/CharacterCard';
import constants from '../constants';

export default {
  name: 'PostDetail',
  components: {
    PostCard,
  },
  data() {
    return {
      loading: false,
      post: Object,
    };
  },
  props: {
    postTitle: ,
    breadcrumbs: Array,
  },
};
</script>

<style scoped>
</style>
