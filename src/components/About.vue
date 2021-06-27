<template>
  <div class="about-content">
    <PostCard :post="titlePost" />
    <v-chip-group :style="{'margin': 'auto', 'max-width': '360px', 'padding-bottom': '16px'}">
      <v-chip
        href="https://www.redbubble.com/people/chexplaind/explore"
        target="_blank"
        rel="noreferrer"
        color="red"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>{{ storeIconPath }}</v-icon>
        </v-avatar>
        Sticker / Magnet Store
      </v-chip>
      <v-chip
        href="https://www.instagram.com/chexplaind/"
        target="_blank"
        rel="noreferrer"
        color="pink"
        text-color="white"
      >
        <v-avatar left>
          <v-icon>{{ instagramIconPath }}</v-icon>
        </v-avatar>
        @chexplaind
      </v-chip>
    </v-chip-group>
    <h2>What happens when you literally translate words into Chinese?</h2>
    <p>
      This is a collection of literal meanings of Chinese words for common
      places, objects, translations, or phrases.
    </p>
    <p>
      You can browse by tags or categories, eg:
      <v-chip-group class="tags-container">
        <router-link :to="{ name: 'tag', params: { tagName: 'countries' } }">
          <v-chip label link>Countries</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'cities' } }">
          <v-chip label link>Cities</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'food' } }">
          <v-chip label link>Food</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'china' } }">
          <v-chip label link>China</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'europe' } }">
          <v-chip label link>Europe</v-chip>
        </router-link>
        <router-link :to="{ name: 'tag', params: { tagName: 'asia' } }">
          <v-chip label link>Asia</v-chip>
        </router-link>
      </v-chip-group>
    </p>
    <p>
      These could be translated by
      <router-link :to="{ name: 'tag', params: { tagName: 'E2C' } }"
        >mimicking pronunciations</router-link
      >, coined by
      <router-link :to="{ name: 'tag', params: { tagName: 'meaning' } }"
        >meaning</router-link
      >, or original Chinese names
      <router-link :to="{ name: 'tag', params: { tagName: 'C2E' } }"
        >romanised into English</router-link
      >.
    </p>
  </div>
</template>

<script>
import { mdiStoreOutline, mdiInstagram } from "@mdi/js";
import PostCard from "./PostCard.vue";

export default {
  name: "About",
  components: {
    PostCard,
  },
  data: () => ({
    storeIconPath: mdiStoreOutline,
    instagramIconPath: mdiInstagram,
    titlePost: {
      titleZh: "直譯詞典",
      titleEn: "The Literal Chinese Dictionary",
      explanation: "Straight Translate Vocabulary Book",
      jyutping: "zik6 jik6 ci4 din2",
      pinyin: "zhí yì cí diǎn",
      backgroundHex: "#ffe680aa",
    },
  }),
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
