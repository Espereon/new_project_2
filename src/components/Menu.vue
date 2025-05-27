<script setup>
const emit = defineEmits([
  "openSelectKnife",
  "openBladeWeapons",
  "openSouvenirProducts",
  "openFlashlight",
  "openRelatedProducts",
]);
</script>

<template>
  <div
    class="flex center justify-between items-center text-white cursor-pointer bg-black h-[70px]"
  >
    <p @click="() => emit('openSelectKnife')">Каталог ножей</p>
    <p @click="() => emit('openBladeWeapons')">Клинковое оружие</p>
    <p @click="() => emit('openSouvenirProducts')">Суверенные изделия</p>
    <p @click="() => emit('openFlashlight')">Фонари ARMYTEK</p>
    <p @click="() => emit('openRelatedProducts')">Сопутствующие товары</p>
  </div>
</template>

<style scoped>
p:hover {
  color: #e8aa31;
  transition: color 0.5s;
  border-bottom: solid;
}

p {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: left;
}
</style>
