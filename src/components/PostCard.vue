<template>
  <div>
    <v-card class="card rounded-0" :style="{ 'background': post.backgroundHex, 'aspect-ratio': aspectRatio }"
      elevation="0">
      <div class="icons">
        <img v-for="icon in post.icons" :key="icon"
          :src="'https://chexplaindata.blob.core.windows.net/icons/' + icon + '.svg'" />
      </div>
      <div class="words">
        <div class="levelZh">
          <p class="titleZh">{{ post.titleZh }}</p>
          <p class="pinyin">
            <span v-if="!!post.pinyin">[MAN&thinsp;|&thinsp;普]&ensp;{{ post.pinyin }}</span>
            <br v-if="!!post.jyutping" />
            <span v-if="!!post.jyutping">[CAN&thinsp;|&thinsp;廣]&ensp;{{ post.jyutping }}</span>
            <br v-if="!!post.tailo" />
            <span v-if="!!post.tailo">[HOK&thinsp;|&thinsp;福]&ensp;{{ post.tailo }}</span>
          </p>
        </div>
        <div class="levelEn">
          <p class="explanation">{{ post.explanation }}</p>
          <p class="titleEn">
            <span>[ENG&thinsp;|&thinsp;英]&ensp;{{ post.titleEn }}</span>
            <span v-if="post.titleEnAlts && post.titleEnAlts.length" class="titleEn">,
              <span v-for="(titleEnAlt, index) in post.titleEnAlts" :key="`${titleEnAlt}-${index}`">
                {{ titleEnAlt }}<span v-if="index < post.titleEnAlts.length - 1">, </span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </v-card>
    <v-chip-group column class="tags-container">
      <router-link v-for="tag in post.tags" :key="tag" :to="{ name: 'tag', params: { tagName: tag } }">
        <v-chip link outlined class="tag">{{ prettifyTag(tag) }}</v-chip>
      </router-link>
    </v-chip-group>
    <p class="credit">{{ post.credit }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: Object,
    aspectRatio: {
      type: String,
      default: '3 / 4',
    },
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
  aspect-ratio: 3 / 4;
  width: min(100%, 600px);
  min-width: 355px;
  margin: auto;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.credit {
  display: block;
  text-align: left;
  color: grey;
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

div.icons>img {
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
  font-size: 0.75em;
  color: #5d5d5d;
  margin: 1em 0 0 0.25em;
  vertical-align: middle;
}

p.titleEn {
  display: block;
  font-size: 0.85em;
  color: #5d5d5d;
}

p.explanation {
  text-align: left;
  font-size: 1.8em;
  margin-bottom: 0.25em;
}
</style>
