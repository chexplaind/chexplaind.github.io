<template>
  <div id="header">
    <h1>
      The Literal Chinese Dictionary
      <InstagramBadge hasText />
      <br />
      <span class="grey--text">直譯詞典</span>
    </h1>
    <v-divider class="fat-divider" />
    
  </div>
</template>

<script>
import InstagramBadge from "./InstagramBadge.vue";

export default {
  name: "Header",
  components: {
    InstagramBadge
  }
};
</script>

<style scoped>
#header {
  max-width: 700px;
  margin: 0 auto;
}

.fat-divider {
  margin: 1em 0;
}

.tags-container {
  margin-bottom: 16px;
  vertical-align: middle;
}
</style>