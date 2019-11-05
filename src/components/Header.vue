<template>
  <div id="header">
    <h1>
      The Literal Chinese Dictionary
      <InstagramBadge hasText />
      <br />
      <span class="grey--text">直譯詞典</span>
    </h1>
    <v-divider class="fat-divider" />
    <div class="about-content">
      <p>A collection of literal meanings of Chinese words for common places, objects, or phrases, eg.</p>
      <v-chip-group class="tags-container">
        <router-link :to="{ name: 'tag', params: { tagName: 'countries' }}">
          <v-chip label link>Countries</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'cities' }}">
          <v-chip label link>Cities</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'food' }}">
          <v-chip label link>Food</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'china' }}">
          <v-chip label link>China</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'europe' }}">
          <v-chip label link>Europe</v-chip>
        </router-link>
      </v-chip-group>
      <p>These could be translated by mimicking pronunciations, coined by meaning, or original Chinese names romanised into English.</p>
    </div>
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

.about-content {
  text-align: left;
  margin-bottom: 1.5em;
}

.tags-container {
  margin-bottom: 16px;
  vertical-align: middle;
}
</style>