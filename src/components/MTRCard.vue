<template>
  <div>
    <v-card class="card">
      <div class="canvas" :style="{'background-color': post.backgroundHex}">
        <div class="icons">
          <img
            v-for="icon in post.icons"
            :key="icon"
            :src="'https://chexplaindata.blob.core.windows.net/icons/' + icon + '.svg'"
          />
        </div>
        <div class="words">
          <div class="levelZh">
            <p
              class="titleZh"
              :style="{'color': getBestTextColor(post.backgroundHex)}"
            >{{post.titleZh}}</p>
          </div>
          <div class="levelEn">
            <p
              class="explanation"
              :style="{'color': getBestTextColor(post.backgroundHex)}"
            >{{post.explanation}}</p>
          </div>
        </div>
      </div>
      <v-card-actions class="details">
        <p class="titleEn">{{post.titleEn}}</p>
        <p class="pinyin">
          <span v-if="!!post.jyutping">&emsp;[CAN]&ensp;{{post.jyutping}}</span>
          <span v-if="!!post.pinyin">&emsp;[MAN]&ensp;{{post.pinyin}}</span>
          <span v-if="!!post.tailo">&emsp;[HOK]&ensp;{{post.tailo}}</span>
        </p>
      </v-card-actions>
    </v-card>
    <v-chip-group column class="tags-container">
      <router-link
        v-for="tag in post.tags"
        :key="tag"
        :to="{ name: 'tag', params: { tagName: tag }}"
      >
        <v-chip link class="tag">{{ prettifyTag(tag) }}</v-chip>
      </router-link>
    </v-chip-group>
    <p class="credit">{{post.credit}}</p>
  </div>
</template>

<script>
export default {
  name: 'MTRCard',
  props: {
    post: Object,
  },
  methods: {
    prettifyTag(tagName) {
      tagName = tagName.replace('_', ' ').replace('2', '-to-');
      return tagName;
    },
    getBestTextColor(hexcolor) {
      hexcolor = hexcolor.replace('#', '');
      const r = parseInt(hexcolor.substr(0, 2), 16);
      const g = parseInt(hexcolor.substr(2, 2), 16);
      const b = parseInt(hexcolor.substr(4, 2), 16);
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 130 ? 'default' : 'WhiteSmoke';
    },
  },
};
</script>

<style scoped>
.card {
  padding: 7vh 0;
  min-width: 355px;
  max-width: 600px;
  box-shadow: 0;
  margin: auto;
}

.tags-container {
  margin: 6px 0;
}

.tag {
  text-transform: capitalize;
}

.credit {
  display: block;
  text-align: left;
  color: lightgray;
  font-size: 0.75em;
}

div.words {
  margin: 0 auto;
  text-align: center;
  line-height: 0.9;
  text-shadow: 0.5px 0.5px #696969;
  padding: 30% 10%;
}

div.details {
  justify-content: space-between;
}

p.titleZh {
  font-size: 3.9em;
  letter-spacing: 0.1em;
  font-weight: 750;
  font-family: "Noto Serif TC", sans-serif;
}

p.explanation {
  font-size: 1.65em;
  font-weight: 600;
  font-family: Helvetica, sans-serif;
}

p.titleEn {
  color: grey;
  margin: 0;
}

p.pinyin {
  font-size: 0.67em;
  color: grey;
  margin: 0;
}

.canvas {
  width: 100%;
  height: 100%;
  background-size: 16px 16px;
  background-repeat: repeat;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(96, 96, 96, 0.5) 25%,
      rgba(96, 96, 96, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(96, 96, 96, 0.5) 75%,
      rgba(96, 96, 96, 0.5) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(96, 96, 96, 0.5) 25%,
      rgba(96, 96, 96, 0.5) 26%,
      transparent 27%,
      transparent 74%,
      rgba(96, 96, 96, 0.5) 75%,
      rgba(96, 96, 96, 0.5) 76%,
      transparent 77%,
      transparent
    );
}
</style>
