<template>
  <v-list-item>
              <v-list-item-avatar>
                <span>{{character}}</span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: String
  },
}
</script>

<style scoped>

</style>