<template>
  <v-list-item>
    <v-list-item-avatar>
      <span>{{character}}</span>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{explanation}}</v-list-item-title>
      <v-list-item-subtitle>{{pinyin}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: String,
    explanation: String,
    pinyin: String
  }
};
</script>

<style scoped>
</style>