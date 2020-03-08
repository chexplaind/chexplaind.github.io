<template>
  <v-card>
    <v-card-title>{{searchTerm}}</v-card-title>
    <v-btn icon>
      <v-icon>{{mdiClose}}</v-icon>
    </v-btn>
    <CharacterCard />
  </v-card>
</template>

<script>
import constants from "../constants";
import store from "../store";
import CharacterCard from "../components/CharacterCard";
import { mdiClose } from "@mdi/js";

export default {
  name: "Recent",
  components: {
    CharacterCard
  },
  data() {
    return {
      searchTerm: "",
      responseTitleZh: "",
      responseCharacters: [],
      isLoading: false,
      constants: constants,
      mdiClose: mdiClose
    };
  },
  created: function() {
    store.clearSearchUrl();
    this.refreshSearchTerm(this.$route);
    this.runMachinery(this.searchTerm);
  },
  methods: {
    refreshSearchTerm: function(to) {
      var searchTerm = to.params.searchTerm;
      if (searchTerm) {
        this.searchTerm = searchTerm;
      }
    },
    runMachinery(searchTerm) {
      if (searchTerm === undefined || searchTerm === null || searchTerm === "")
        return;
      this.fetchApi(
        constants.apiBaseUrl + constants.apiMachineryPath + searchTerm
      );
    },
    fetchApi(url) {
      if (url === undefined || url === null || url === "") return;
      this.isLoading = true;
      fetch(url, {
        method: "GET",
        cache: "default"
      })
        .then(response => {
          console.log(response);
          response.json();
        })
        .then(json => {
          this.isLoading = false;
        })
        .catch(error => {
          console.error("Backend Error:", error);
          this.isLoading = false;
        });
    }
  }
};
</script>

<style scoped>
</style>