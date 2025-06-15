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
          "https://8df3e567b5011083.mokky.dev/info_knifes"
        );
        this.items = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export const useSortBy = defineStore("data", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchItems() {
      try {
        const response = await axios.get(
          "https://8df3e567b5011083.mokky.dev/info_knifes?sortBy=price"
        );
        this.items = response.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
});
