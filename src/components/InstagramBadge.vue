<template>
  <div class="badge">
    <v-btn text icon color="pink" href="https://www.instagram.com/chexplaind/">
      <v-icon>mdi-instagram</v-icon>
      <span class="d-none d-md-flex" v-if="hasText">&nbsp;@chexplaind</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "InstagramBadge",
  props: {
      hasText: Boolean,
  }
};
</script>

<style scoped>
.badge {
  display: block;
  float: right;
}
</style>