<script setup>
import Main from "../components/Main.vue";
import InfoBlock from "../components/InfoBlock.vue";
import TopSales from "../components/TopSales.vue";
import NewItems from "../components/NewItems.vue";
import Promotion from "../components/Promotion.vue";
import Articles from "../components/Articles.vue";
import { onMounted, ref } from "vue";
import { useFetcherStore } from "../store/index";

const fetcher = useFetcherStore();
onMounted(() => {
  fetcher.fetchItems();
});
</script>

<template>
  <div>
    <Main />
    <InfoBlock />
    <TopSales :items="fetcher.items" />
    <NewItems :items="fetcher.items" />
    <Promotion :items="fetcher.items" />
    <Articles />
  </div>
</template>
