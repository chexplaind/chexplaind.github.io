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
          <div class="titleEn">
            <span>[ENG&thinsp;|&thinsp;英]&ensp;<b>{{ post.titleEn }}</b></span>
            <span v-if="post.titleEnAlts && post.titleEnAlts.length" class="titleEnAlts">,
              <span v-for="(titleEnAlt, index) in post.titleEnAlts" :key="`${titleEnAlt}-${index}`">
                {{ titleEnAlt }}<span v-if="index < post.titleEnAlts.length - 1">, </span>
              </span>
            </span>
          </div>
        </div>

      </div>
        <div class="levelStory">
          <div v-if="post.storyEn" class="storyEn" v-html="renderMarkdown(post.storyEn)" />
        </div>
    </v-card>
    <div class="tags-container">
      <router-link v-for="tag in post.tags" :key="tag" :to="{ name: 'tag', params: { tagName: tag } }">
        <v-chip link outlined class="tag">{{ prettifyTag(tag) }}</v-chip>
      </router-link>
    </div>
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
    escapeHtml(text) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },
    renderMarkdown(text) {
      if (!text) {
        return '';
      }
      let html = this.escapeHtml(String(text));
      html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      html = html.replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
      );
      html = html.replace(/\n/g, '<br />');
      return html;
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
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
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
  padding: 3% 10% 0 10%;
}

div.levelStory {
  display: inline-block;
  margin: 0 auto;
  text-align: left;
  padding: 0 15% 3% 15%;
}

div.levelZh {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

p.titleZh {
  display: inline-block;
  text-align: left;
  margin: 0 0.2em 0 0;
  font-size: 2.6em;
  vertical-align: middle;
  white-space: nowrap;
}

p.pinyin {
  display: inline-block;
  text-align: left;
  font-size: 0.8em;
  color: #5d5d5d;
  margin: 1em 0 0 0.25em;
  vertical-align: middle;
}

.titleEn {
  display: block;
  font-size: 0.9em;
  color: #5d5d5d;
  white-space: nowrap;
}

.titleEnAlts {
  display: inline;
}

.storyEn {
  border-top: 1px solid rgba(93, 93, 93, 0.35);
  padding-top: 1em;
  margin-top: 0.75em;
  font-size: 0.9em;
  color: #5d5d5d;
  line-height: 1.5;
}

p.explanation {
  text-align: left;
  font-size: 1.8em;
  margin-bottom: 0.25em;
}
</style>
