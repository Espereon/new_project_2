<script setup>
// const emit = defineEmits([
//   "openSelectKnife",
//   "openBladeWeapons",
//   "openSouvenirProducts",
//   "openFlashlight",
//   "openRelatedProducts",
// ]);
</script>

<template>
  <div
    class="flex center justify-between items-center text-white cursor-pointer bg-black h-[70px]"
  >
    <router-link to="/categories"><p>Каталог ножей</p></router-link>
    <router-link to="/notyeat"><p>Клинковое оружие</p></router-link>
    <router-link to="/notyeat"><p>Суверенные изделия</p></router-link>
    <router-link to="/notyeat"><p>Фонари ARMYTEK</p></router-link>
    <router-link to="/notyeat"><p>Сопутствующие товары</p></router-link>
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
