<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import SelectKnife from "./components/SelectKnife.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

const selectKnifeOpen = ref(false);
const openSelectKnife = () => (selectKnifeOpen.value = !selectKnifeOpen.value);
</script>

<template>
  <div>
    <Header />
    <Menu @open-select-knife="openSelectKnife" />
    <SelectKnife class="absolute z-10 w-full" v-if="selectKnifeOpen" />
    <router-view />
    <Footer />
  </div>
</template>

<style>
.center {
  padding-left: calc(50% - 794px);
  padding-right: calc(50% - 794px);
}
</style>
