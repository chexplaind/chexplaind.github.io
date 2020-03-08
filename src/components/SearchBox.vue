<template>
  <div id="search-container">
    <v-autocomplete
      :items="autocompleteResults"
      :search-input.sync="autocompleteTerm"
      :loading="isAutocompleteLoading"
      :label="entriesCount"
      :menu-props="{ top: true }"
      hide-selected
      hide-details
      :hide-no-data="!!autocompleteResults.length || !autocompleteTerm"
      outlined
      placeholder="Type here to search me..."
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title class="text-left">
            No results for "{{autocompleteTerm}}".
            <router-link
              :to="{ name: 'machinery', params: { searchTerm: autocompleteTerm }}"
            >Try machine?</router-link>
          </v-list-item-title>
          <v-list-item-action>
            <router-link :to="{ name: 'machinery', params: { searchTerm: autocompleteTerm }}">
              <v-icon>{{mdiRobot}}</v-icon>
              <v-chip x-small link>alpha</v-chip>
            </router-link>
          </v-list-item-action>
        </v-list-item>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-content>
          <v-list-item-title v-text="item" class="text-left"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>{{mdiCheckboxMarked}}</v-icon>
        </v-list-item-action>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import constants from "../constants";
import store from "../store";
import { mdiCheckboxMarked, mdiRobot, mdiMagnify } from "@mdi/js";

export default {
  name: "SearchBox",
  data() {
    return {
      autocompleteTerm: "",
      autocompleteResults: [],
      isAutocompleteLoading: false,
      showMachinery: false,
      entriesCount: "",
      constants: constants,
      mdiCheckboxMarked: mdiCheckboxMarked,
      mdiRobot: mdiRobot
    };
  },
  created: function() {
    this.getCount();
  },
  watch: {
    autocompleteTerm(val) {
      this.handleAutoComplete(val);
    }
  },
  methods: {
    handleAutoComplete(name) {
      this.doAutocomplete(name);
      if (this.autocompleteResults.includes(name)) {
        store.setSearchUrl(
          constants.apiBaseUrl +
            constants.apiSearchPath +
            encodeURIComponent(name)
        );
        document
          .getElementById("search-results-container")
          .scrollIntoView(true);
      }
    },
    doAutocomplete(name) {
      if (name === undefined || name === null || name === "") return;
      this.isAutocompleteLoading = true;
      fetch(
        constants.apiBaseUrl +
          constants.apiAutocompletePath +
          encodeURIComponent(name),
        {
          method: "GET",
          cache: "default"
        }
      )
        .then(response => response.json())
        .then(
          json => (this.autocompleteResults = json.map(value => value.text))
        )
        .catch(error => console.error("Backend Error:", error))
        .finally(() => {
          this.isAutocompleteLoading = false;
        });
    },
    getCount() {
      fetch(constants.apiBaseUrl + constants.apiCountPath, {
        method: "GET",
        cache: "default"
      })
        .then(response => response.json())
        .then(json => (this.entriesCount = json + " entries in total"))
        .catch(error => console.error("Backend Error:", error));
    }
  }
};
</script>

<style scoped>
#search-container {
  padding: 0px 5px;
  width: 80%;
  max-width: 600px;
}

#search-title {
  text-align: left;
}
</style>