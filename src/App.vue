<script setup>
import axios from "axios";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import SelectKnife from "./components/SelectKnife.vue";
import Footer from "./components/Footer.vue";

// const newKnifes = ref([]);
</script>

<template>
  <div>
    <Header />
    <Menu />
    <SelectKnife />
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
