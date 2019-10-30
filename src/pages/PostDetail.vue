<template>
  <div>
    <PostCard :post="post" />
  </div>
</template>

<script>
import PostCard from "../components/PostCard";
import constants from "../constants";

export default {
  name: "PostDetail",
  components: {
    PostCard
  },
  data() {
    return {
      loading: false,
      post: Object
    };
  },
  props: {
    postTitle: "",
    breadcrumbs: Array
  }
};
</script>

<style scoped>
</style>