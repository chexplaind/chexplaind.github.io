<template>
  <div>
    <v-card class="card" :style="{'background-color': post.backgroundHex}">
      <div class="icons">
        <img
          v-for="icon in post.icons"
          :key="icon"
          :src="'https://chexplaindata.blob.core.windows.net/icons/' + icon + '.svg'"
        />
      </div>
      <div class="words">
        <div class="levelZh">
          <p class="titleZh" :style="bestTitleColor(post.backgroundHex)">{{post.titleZh}}</p>
          <!-- <p class="pinyin">
            <span v-if="!!post.pinyin">[MAN]&ensp;{{post.pinyin}}</span>
            <br v-if="!!post.jyutping" />
            <span v-if="!!post.jyutping">[CAN]&ensp;{{post.jyutping}}</span>
            <br v-if="!!post.tailo" />
            <span v-if="!!post.tailo">[HOK]&ensp;{{post.tailo}}</span>
          </p>-->
        </div>
        <div class="levelEn">
          <!-- <p class="titleEn">[EN]&ensp;{{post.titleEn}}, or</p> -->
          <p class="explanation" :style="bestTitleColor(post.backgroundHex)">{{post.explanation}}</p>
        </div>
      </div>
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
import tinycolor from "tinycolor2";

export default {
  name: "MTRCard",
  props: {
    post: Object
  },
  data: function() {
    return {
      titleDark: {
        color: "default"
      },
      titleLight: {
        color: "white"
      }
    };
  },
  methods: {
    prettifyTag(tagName) {
      tagName = tagName.replace("_", " ").replace("2", "-to-");
      return tagName;
    },
    bestTitleColor(backgroundHex) {
      var color = tinycolor(backgroundHex).toRgb();
      var lumen =
        (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b) * color.a;
      return lumen > 0.179 ? this.titleDark : this.titleLight;
    }
  }
};
</script>

<style scoped>
.tags-container {
  margin: 6px 0;
}

.tag {
  text-transform: capitalize;
}

div.words {
  margin: 0 auto;
  text-align: center;
  line-height: 0.9;
  padding: 27% 9%;
}

p.titleZh {
  font-size: 3.75em;
  font-weight: 800;
  font-family: "Noto Serif TC", sans-serif;
}

p.explanation {
  font-size: 1.75em;
  font-weight: 900;
  font-family: "PT Sans", Helvetica, sans-serif;
}

.card {
  width: 100%;
  height: 100%;
  background-size: 25px 25px;
  background-repeat: repeat;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.25) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.25) 75%,
      rgba(255, 255, 255, 0.25) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.25) 26%,
      transparent 27%,
      transparent 74%,
      rgba(255, 255, 255, 0.25) 75%,
      rgba(255, 255, 255, 0.25) 76%,
      transparent 77%,
      transparent
    );
}
</style>