<template>
  <div id="machinery-container">
    <v-divider />
    <v-subheader inset class="caps">Machinery</v-subheader>
    <v-divider />
    <v-card class="machinery-card">
      <v-container>
        <v-row justify="space-between">
          <v-card-title>
            <v-icon>{{mdiRobot}}</v-icon>
            <span class="text-uppercase titleEn caption">{{"[" +responseSourceLanguage +"]"}}</span>
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
        <v-progress-circular v-if="isLoading" indeterminate color="primary" />
        <div v-else-if="isError" class="d-flex align-center error-status">
          <v-icon>{{mdiHeartBroken}}</v-icon>&ensp;machine translation did not work for this search term :(
        </div>
        <v-list v-else>
          <v-divider />
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
import { mdiClose, mdiRobot, mdiHeartBroken } from '@mdi/js';
import constants from '../constants';
import store from '../store';
import CharacterCard from '../components/CharacterCard';

export default {
  name: 'Recent',
  components: {
    CharacterCard,
  },
  data() {
    return {
      searchTerm: '',
      isLoading: false,
      isError: false,
      responseTitleZh: '',
      responseCharacters: [],
      responseSourceLanguage: '',
      constants,
      mdiClose,
      mdiRobot,
      mdiHeartBroken,
    };
  },
  created() {
    store.clearSearchUrl();
    this.refreshSearchTerm(this.$route);
  },
  watch: {
    $route(to, from) {
      store.clearSearchUrl();
      this.refreshSearchTerm(to);
    },
  },
  methods: {
    refreshSearchTerm(to) {
      const { searchTerm } = to.params;
      if (searchTerm) {
        this.searchTerm = searchTerm;
        this.runMachinery(searchTerm);
      }
    },
    runMachinery(searchTerm) {
      this.fetchApi(
        constants.apiBaseUrl + constants.apiMachineryPath + searchTerm,
      );
      window.scrollTo(0, 330);
    },
    fetchApi(url) {
      if (url === undefined || url === null || url === '') return;
      this.isLoading = true;
      this.isError = false;
      fetch(url, {
        method: 'GET',
        cache: 'default',
      })
        .then(response => response.json())
        .then((json) => {
          this.isLoading = false;
          this.responseTitleZh = json.titleZh;
          this.responseCharacters = json.characters;
          this.responseSourceLanguage = json.sourceLanguage;
        })
        .catch((error) => {
          this.isLoading = false;
          this.isError = true;
        });
    },
  },
};
</script>

<style scoped>
#machinery-container {
  max-width: 600px;
  margin: auto;
}

.machinery-card {
  margin: 1.5em 0;
}

.error-status {
  padding: 16px;
  background: #ffcdd2aa;
  border-radius: 6px;
}

.titleEn {
  font-size: 0.75em;
  color: grey;
}

p.caption {
  color: lightgrey;
}
</style>
