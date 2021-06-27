<template>
  <div>
    <v-card class="card rounded-0" :style="{'background': post.backgroundHex}" elevation="0">
      <div class="icons">
        <img
          v-for="icon in post.icons"
          :key="icon"
          :src="'https://chexplaindata.blob.core.windows.net/icons/' + icon + '.svg'"
        />
      </div>
      <div class="words">
        <div class="levelZh">
          <p class="titleZh">{{post.titleZh}}</p>
          <p class="pinyin">
            <span v-if="!!post.pinyin">[MAN]&ensp;{{post.pinyin}}</span>
            <br v-if="!!post.jyutping" />
            <span v-if="!!post.jyutping">[CAN]&ensp;{{post.jyutping}}</span>
            <br v-if="!!post.tailo" />
            <span v-if="!!post.tailo">[HOK]&ensp;{{post.tailo}}</span>
          </p>
        </div>
        <div class="levelEn">
          <p class="titleEn">[EN]&ensp;{{post.titleEn}}, or</p>
          <p class="explanation">{{post.explanation}}</p>
        </div>
      </div>
    </v-card>
    <v-chip-group column class="tags-container">
      <router-link
        v-for="tag in post.tags"
        :key="tag"
        :to="{ name: 'tag', params: { tagName: tag }}"
      >
        <v-chip link outlined class="tag">{{ prettifyTag(tag) }}</v-chip>
      </router-link>
    </v-chip-group>
    <p class="credit">{{post.credit}}</p>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
  },
  methods: {
    prettifyTag(tagName) {
      tagName = tagName.replace('_', ' ').replace('2', '-to-');
      return tagName;
    },
  },
};
</script>

<style scoped>
.card {
  padding: 7vh 0;
  min-width: 355px;
  max-width: 600px;
  margin: auto;
}

.credit {
  display: block;
  text-align: left;
  color: lightgray;
  font-size: 0.75em;
}

.tags-container {
  margin: 6px 0;
}

.tag {
  text-transform: capitalize;
}

div.icons {
  margin-bottom: 9px;
}

div.icons > img {
  margin: 2%;
  width: 90px;
  max-width: 25%;
}

div.words {
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  padding: 0 9%;
}

p.titleZh {
  display: inline-block;
  text-align: left;
  margin: 0 0.2em 0 0;
  font-size: 2.65em;
  vertical-align: middle;
}

p.pinyin {
  display: inline-block;
  text-align: left;
  font-size: 0.67em;
  color: grey;
  margin: 1em 0 0 0.25em;
  vertical-align: middle;
}

p.titleEn {
  display: block;
  font-size: 0.75em;
  color: grey;
  margin: 0.75em 0 0.5em 0.25em;
}

p.explanation {
  text-align: left;
  font-size: 1.8em;
  margin-bottom: 0.25em;
}
</style>
