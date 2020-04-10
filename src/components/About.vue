<template>
  <div class="about-content">
    <h2>What happens when you literally translate words into Chinese?</h2>
    <p>This is a collection of literal meanings of Chinese words for common places, objects, or phrases, eg.</p>
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
      <router-link :to="{ name: 'tag', params: { tagName: 'asia' }}">
        <v-chip label link>Asia</v-chip>
      </router-link>
    </v-chip-group>
    <p>
      These could be translated by
      <router-link :to="{ name: 'tag', params: { tagName: 'E2C' }}">mimicking pronunciations</router-link>, coined by
      <router-link :to="{ name: 'tag', params: { tagName: 'meaning' }}">meaning</router-link>, or original Chinese names
      <router-link :to="{ name: 'tag', params: { tagName: 'C2E' }}">romanised into English</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about-content {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1.5em;
  text-align: left;
}
</style>
