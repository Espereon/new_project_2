<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="ml-[165px] mb-[40px]">Хиты продаж</div>
  <div class="grid grid-cols-3 gap-10">
    <Card
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :urlImg="item.img"
      :size="item.size"
      :material="item.material"
    />
  </div>
</template>
