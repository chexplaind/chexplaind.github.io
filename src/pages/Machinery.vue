<template>
  <div id="machinery-container">
    <v-divider />
    <v-subheader inset class="caps">
      {{ title }}
      <span v-if="showCount">&nbsp;({{posts.length}} entries)</span>
    </v-subheader>
    <v-divider />
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
        <v-list>
          <v-divider></v-divider>
          <CharacterCard
            v-for="(character, index) in responseCharacters"
            :key="character.symbol+index"
            :character="character.symbol"
            :explanation="character.explanation"
            :pinyin="character.pinyin"
          />
        </v-list>
        <p class="text-right caption">powered by bing translator</p>
      </v-container>
    </v-card>
  </div>
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
  },
  watch: {
    $route(to, from) {
      store.clearSearchUrl();
      this.refreshSearchTerm(to);
    }
  },
  methods: {
    refreshSearchTerm: function(to) {
      var searchTerm = to.params.searchTerm;
      if (searchTerm) {
        this.searchTerm = searchTerm;
        this.runMachinery(searchTerm);
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
#machinery-container {
  max-width: 600px;
  margin: auto;
}

.caption {
  color: lightgrey;
}
</style>