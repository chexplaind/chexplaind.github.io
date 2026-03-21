<template>
  <div id="search-container">
    <v-autocomplete
      variant="outlined"
      hide-details="auto"
      placeholder="Type here to search me..."
      :items="autocompleteResults"
      v-model="selectedAutocompleteResult"
      v-model:search="autocompleteTerm"
      @update:model-value="handleSelection"
      @keydown.enter.prevent="handleEnter"
      :loading="isAutocompleteLoading"
      :label="entriesCount"
      :hide-no-data="!!autocompleteResults.length || !autocompleteTerm"
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title class="text-left">
            No results for "{{ autocompleteTerm }}".
            <br />
            <a @click="goToMachinery()" class="caption"
              >Try machine interpretation?</a
            >
          </v-list-item-title>
          <template #append>
            <div class="d-flex align-center" @click="goToMachinery()">
              <v-icon>{{ mdiRobot }}</v-icon>
              <v-chip size="x-small" class="ml-1">alpha</v-chip>
            </div>
          </template>
        </v-list-item>
      </template>
      <template v-slot:item="{ props, item }">
        <v-list-item v-bind="props" :title="item?.title ?? item?.raw ?? ''" class="text-left">
          <template #append>
          <v-icon>{{ mdiCheckboxMarked }}</v-icon>
          </template>
        </v-list-item>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
import { mdiCheckboxMarked, mdiRobot } from "@mdi/js";
import constants from "../constants";
import store from "../store";

export default {
  name: "SearchBox",
  data() {
    return {
      autocompleteTerm: "",
      autocompleteResults: [],
      selectedAutocompleteResult: null,
      isAutocompleteLoading: false,
      autocompleteRequestId: 0,
      entriesCount: "",
      constants,
      mdiCheckboxMarked,
      mdiRobot,
    };
  },
  created() {
    this.getCount();
  },
  watch: {
    autocompleteTerm(val) {
      this.handleAutoComplete(val);
    },
    selectedAutocompleteResult(val) {
      this.handleSelection(val);
    },
  },
  methods: {
    handleAutoComplete(name) {
      this.doAutocomplete(name);
    },
    doAutocomplete(name) {
      if (name === undefined || name === null || name === "") {
        this.autocompleteResults = [];
        return;
      }
      const requestId = ++this.autocompleteRequestId;
      this.isAutocompleteLoading = true;
      fetch(
        constants.apiBaseUrl +
          constants.apiAutocompletePath +
          encodeURIComponent(name),
        {
          method: "GET",
          cache: "default",
        }
      )
        .then(response => response.json())
        .then((json) => {
          if (requestId !== this.autocompleteRequestId) return;
          const results = json.map(value => value.text);
          this.autocompleteResults = results;
          const exactMatch = results.find(
            value => value.toLowerCase() === name.toLowerCase()
          );
          if (exactMatch) this.searchByName(exactMatch);
        })
        .catch(error => console.error("Backend Error:", error))
        .finally(() => {
          if (requestId === this.autocompleteRequestId) {
            this.isAutocompleteLoading = false;
          }
        });
    },
    searchByName(name) {
      if (!name) return;
      store.setSearchUrl(
        constants.apiBaseUrl +
          constants.apiSearchPath +
          encodeURIComponent(name)
      );
      window.scrollTo(0, 630);
    },
    handleSelection(value) {
      if (typeof value === "string" && value.trim()) {
        this.searchByName(value.trim());
        return;
      }
      if (value && typeof value === "object") {
        const normalized =
          value.title ??
          value.value ??
          value.raw?.title ??
          value.raw ??
          "";
        if (typeof normalized === "string" && normalized.trim()) {
          this.searchByName(normalized.trim());
        }
      }
    },
    handleEnter() {
      const term = this.autocompleteTerm?.trim();
      if (!term) return;
      const exactMatch = this.autocompleteResults.find(
        value => value.toLowerCase() === term.toLowerCase()
      );
      if (exactMatch) this.searchByName(exactMatch);
    },
    getCount() {
      fetch(constants.apiBaseUrl + constants.apiCountPath, {
        method: "GET",
        cache: "default",
      })
        .then(response => response.json())
        .then((json) => {
          this.entriesCount = `${json} entries in total`;
        })
        .catch(error => console.error("Backend Error:", error));
    },
    goToMachinery() {
      const machineryTerm = this.autocompleteTerm;
      if (
        machineryTerm === undefined ||
        machineryTerm === null ||
        machineryTerm === ""
      ) {
        return;
      }
      this.$router.push({
        name: "machinery",
        params: {
          searchTerm: machineryTerm,
        },
      });
    },
  },
};
</script>

<style scoped>
#search-container {
  padding: 0px 5px;
  width: 95%;
  max-width: 820px;
}

#search-title {
  text-align: left;
}
</style>
