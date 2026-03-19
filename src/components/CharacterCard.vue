<template>
  <div>
    <v-list-item :title="explanation" :subtitle="`[MAN] ${pinyin || ''}`">
      <template #prepend>
        <span class="titleZh">{{ character }}</span>
      </template>
      <template #title>
        <span class="explanation">{{ explanation }}</span>
      </template>
      <template #subtitle>
        <span class="pinyin">[MAN]&ensp;{{ pinyin }}</span>
      </template>
    </v-list-item>
    <v-divider />
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
  color: #5d5d5d;
  margin: 1em 0 0 0.25em;
  vertical-align: middle;
}

.explanation {
  text-align: left;
  font-size: 1.8em;
  margin-bottom: 0.25em;
}
</style>
