<template>
  <div id="search-container">
    <v-autocomplete
      outlined
      hide-details
      placeholder="Type here to search me..."
      :items="autocompleteResults"
      :search-input.sync="autocompleteTerm"
      :loading="isAutocompleteLoading"
      :label="entriesCount"
      :menu-props="{ top: true, closeOnContentClick: true, offsetY: true }"
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
          <v-list-item-action @click="goToMachinery()">
            <div>
              <v-icon>{{ mdiRobot }}</v-icon>
              <v-chip x-small link>alpha</v-chip>
            </div>
          </v-list-item-action>
        </v-list-item>
      </template>
      <template v-slot:item="{ item }">
        <v-list-item-content>
          <v-list-item-title
            v-text="item"
            class="text-left"
          ></v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>{{ mdiCheckboxMarked }}</v-icon>
        </v-list-item-action>
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
      isAutocompleteLoading: false,
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
        window.scrollTo(0, 630);
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
          cache: "default",
        }
      )
        .then((response) => response.json())
        .then((json) => {
          this.autocompleteResults = json.map((value) => value.text);
        })
        .catch((error) => console.error("Backend Error:", error))
        .finally(() => {
          this.isAutocompleteLoading = false;
        });
    },
    getCount() {
      fetch(constants.apiBaseUrl + constants.apiCountPath, {
        method: "GET",
        cache: "default",
      })
        .then((response) => response.json())
        .then((json) => {
          this.entriesCount = `${json} entries in total`;
        })
        .catch((error) => {
          return console.error("Backend Error:", error);
        });
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
