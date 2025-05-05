<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="center flex justify-between">
    <b class="text-3xl">Хиты продаж</b>
    <div class="flex">
      <p class="text-lg text-gray-400">Перейти в каталог</p>
      <img src="/arrow_rigth.svg" alt="arrow_rigth" />
    </div>
  </div>

  <div class="flex justify-between gap-10 center">
    <Card
      v-for="item in items.slice(0, 4)"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :urlImg="item.img"
      :size="item.size"
      :material="item.material"
    />
  </div>
</template>
