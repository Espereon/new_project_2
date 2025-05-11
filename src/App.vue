<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
import InfoBlock from "./components/InfoBlock.vue";
import TopSales from "./components/TopSales.vue";
import NewItems from "./components/NewItems.vue";
import Promotion from "./components/Promotion.vue";
import Articles from "./components/Articles.vue";
import Footer from "./components/Footer.vue";

const itemsKnifes = ref([]);
const newKnifes = ref([]);

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
  <Header />
  <Menu />
  <Main />
  <InfoBlock />
  <TopSales :items="itemsKnifes" />
  <NewItems :items="itemsKnifes" />
  <Promotion :items="itemsKnifes" />
  <Articles />
  <Footer />
</template>

<style>
.center {
  padding-left: calc(50% - 794px);
  padding-right: calc(50% - 794px);
}
</style>
