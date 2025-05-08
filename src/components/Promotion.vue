<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="center mt-30">
    <div class="flex justify-between mb-15">
      <p class="text-3xl font-bold color-[#141414]">Акции</p>
      <div class="flex gap-4 items-center">
        <p class="font-semibold text-lg color-[#141414] opacity-[0.58]">
          Все акции
        </p>
        <img src="/arrow_rigth.svg" alt="arrow_r" />
      </div>
    </div>
    <div class="flex justify-between gap-7 center mb-30">
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
  </div>
</template>

<style scoped>
p {
  font-family: Montserrat;
}
</style>
