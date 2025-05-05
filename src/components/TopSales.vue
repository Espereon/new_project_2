<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="bg-white">
    <div class="center flex justify-between mb-15">
      <b>Хиты продаж</b>
      <div class="flex gap-4">
        <p>Перейти в каталог</p>
        <img src="/arrow_rigth.svg" alt="arrow_rigth" />
      </div>
    </div>
    <div class="flex justify-between gap-10 center mb-15">
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
    <div class="center mb-41">Полоски сделаю потом</div>
  </div>
</template>

<style scoped>
b {
  color: rgb(20, 20, 20);
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 5%;
  text-align: left;
}

p {
  color: rgba(20, 20, 20, 0.58);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 46px;
  letter-spacing: 5%;
  text-align: left;
}
</style>
