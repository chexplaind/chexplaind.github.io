<template>
  <div class="about-content">
    <PostCard :post="titlePost" :aspect-ratio="postcardAspectRatio" />
    <div class="link-chips">
      <v-chip
        href="https://www.redbubble.com/people/chexplaind/explore"
        target="_blank"
        rel="noreferrer"
        color="red"
        class="text-white"
      >
        <v-avatar start>
          <v-icon>{{ storeIconPath }}</v-icon>
        </v-avatar>
        Merch Store
      </v-chip>
      <v-chip
        href="https://www.instagram.com/chexplaind/"
        target="_blank"
        rel="noreferrer"
        color="pink"
        class="text-white"
      >
        <v-avatar start>
          <v-icon>{{ instagramIconPath }}</v-icon>
        </v-avatar>
        @chexplaind
      </v-chip>
    </div>
    <h2>What happens when you literally translate words into Chinese?</h2>
    <p>
      This is a collection of literal meanings of Chinese words for common
      places, objects, translations, or phrases.
    </p>
    <p>You can browse by tags or categories, eg:</p>
    <div class="tags-container">
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
    </div>
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
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { mdiStoreOutline, mdiInstagram } from "@mdi/js";
import PostCard from "./PostCard.vue";

export default {
  name: "About",
  components: {
    PostCard,
  },
  setup() {
    const width = ref(window.innerWidth);
    const onResize = () => {
      width.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", onResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResize);
    });

    const postcardAspectRatio = computed(() => (width.value < 600 ? "1 / 1" : "2 / 1"));

    return {
      postcardAspectRatio,
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
    };
  },
};
</script>

<style scoped>
.about-content {
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 1.5em;
  text-align: left;
}

.link-chips {
  margin: auto;
  max-width: 360px;
  padding-bottom: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tags-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
