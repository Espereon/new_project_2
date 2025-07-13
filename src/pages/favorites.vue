<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import CardItemList from "../components/CardItemList.vue";

const favorites = ref([]);

onMounted(async () => {
  try {
    const { data } = await axios.get(
      "https://8df3e567b5011083.mokky.dev/favorites?_relations=items"
    );
    favorites.value = data.map((obj) => obj.item);
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
    <CardItemList :items="favorites" is-favorites />
  </div>
</template>

<style>
.box {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  background: rgb(254, 254, 254);
}
</style>
