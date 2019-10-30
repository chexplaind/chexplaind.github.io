<template>
  <div class="about">
    <v-divider/>
    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn text icon color="blue" v-on="on">
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </template> -->
      <div class="about-content">
        <p>Literal Chinese translations / explanations for common places, objects, and phrases.</p>
        <p>These could be translated by mimicking pronunciations, coined by meaning, or original Chinese names romanised into English.</p>
      </div>
    <!-- </v-tooltip> -->
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  margin-top: 1em;
}

.about-content {
  margin-top: 1em;
  text-align: left;
}

</style>
