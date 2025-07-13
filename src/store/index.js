import { defineStore } from "pinia";
import axios from "axios";

export const useFetcherStore = defineStore("data", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get(
          "https://8df3e567b5011083.mokky.dev/items"
        );
        this.items = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export const useFetchFavorite = defineStore("data", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get(
          "https://8df3e567b5011083.mokky.dev/favorites"
        );
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
