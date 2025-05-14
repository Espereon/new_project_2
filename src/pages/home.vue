<script setup>
import Main from "../components/Main.vue";
import InfoBlock from "../components/InfoBlock.vue";
import TopSales from "../components/TopSales.vue";
import NewItems from "../components/NewItems.vue";
import Promotion from "../components/Promotion.vue";
import Articles from "../components/Articles.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const itemsKnifes = ref([]);

const fetchItemsKnifes = async () => {
  try {
    const { data } = await axios.get(
      "https://8df3e567b5011083.mokky.dev/info_knifes"
    );
    itemsKnifes.value = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchItemsKnifes();
});
</script>

<template>
  <Main />
  <InfoBlock />
  <TopSales :items="itemsKnifes" />
  <NewItems :items="itemsKnifes" />
  <Promotion :items="itemsKnifes" />
  <Articles />
</template>
