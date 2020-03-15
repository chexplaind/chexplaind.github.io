<template>
  <div id="header">
    <h1>
      <router-link :to="{ name: 'home'}">The Literal Chinese Dictionary</router-link>
      <InstagramBadge hasText />
      <br />
      <router-link :to="{ name: 'home'}">
        <span class="grey--text">直譯詞典</span>
      </router-link>
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

a:link{
  color: default;
  text-decoration: none;
}
</style>
