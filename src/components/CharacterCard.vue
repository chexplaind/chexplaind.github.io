<template>
  <div>
    <v-list-item>
      <v-list-item-avatar tile>
        <span class="titleZh">{{character}}</span>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="explanation">{{explanation}}</v-list-item-title>
        <v-list-item-subtitle class="pinyin">[MAN]&ensp;{{pinyin}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  name: 'CharacterCard',
  props: {
    character: String,
    explanation: String,
    pinyin: String,
  },
};
</script>

<style scoped>
.titleZh {
  display: inline-block;
  text-align: left;
  margin: 0 0.2em 0 0;
  font-size: 2.4em;
  vertical-align: middle;
}

.pinyin {
  display: inline-block;
  text-align: left;
  font-size: 0.67em;
  color: grey;
  margin: 1em 0 0 0.25em;
  vertical-align: middle;
}

.explanation {
  text-align: left;
  font-size: 1.8em;
  margin-bottom: 0.25em;
}
</style>
