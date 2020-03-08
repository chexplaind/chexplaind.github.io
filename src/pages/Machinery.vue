<template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-card-title>
          <v-icon>{{mdiRobot}}</v-icon>
          &nbsp;
          {{searchTerm}}
        </v-card-title>
        <router-link :to="{ name: 'home'}">
          <v-btn text>
            back to home
            <v-icon>{{mdiClose}}</v-icon>
          </v-btn>
        </router-link>
      </v-row>
      <CharacterCard
        v-for="(character, index) in responseCharacters"
        :key="character.symbol+index"
        :character="character.symbol"
        :explanation="character.explanation"
        :pinyin="character.pinyin"
      />
    </v-container>
  </v-card>
</template>

<script>
import constants from "../constants";
import store from "../store";
import CharacterCard from "../components/CharacterCard";
import { mdiClose, mdiRobot } from "@mdi/js";

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
      mdiClose: mdiClose,
      mdiRobot: mdiRobot
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
        .then(response => response.json())
        .then(json => {
          this.isLoading = false;
          this.responseTitleZh = json.titleZh;
          this.responseCharacters = json.characters;
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