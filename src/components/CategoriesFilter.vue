<script setup>
import { ref } from "vue";

const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Xiaomi" },
];

const materials = [
  { id: 1, name: "Металл" },
  { id: 2, name: "Стекло" },
  { id: 3, name: "Керамика" },
];

const selectedBrands = ref([]);
const selectedMaterials = ref([]);

const isOpen = ref({ brand: false, material: false });

const toggleFilter = (type) => {
  isOpen.value[type] = !isOpen.value[type];
};
</script>

<template>
  <div class="w-94">
    <div class="bg-black h-17.5">
      <p class="text-white text-xl font-bold pl-[30px] pt-[23px]">
        Фильтр товаров
      </p>
    </div>
    <div class="w-94">
      <div
        @click="toggleFilter('brand')"
        class="h-12.5 pl-[30px] pr-[30px] bg-white flex justify-between items-center"
      >
        <p class="text-black text-xl font-semibold">Цена</p>
        <img v-if="isOpen.brand" src="/svg/arrow_top.svg" alt="arrow_top" /><img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.brand">
        <li v-for="brand in brands" :key="brand.id">
          <input type="checkbox" :value="brand.name" v-model="selectedBrands" />
          {{ brand.name }}
        </li>
      </ul>
    </div>
    <div class="w-94">
      <div
        @click="toggleFilter('brand')"
        class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
      >
        <p class="text-white text-xl font-semibold">Производство</p>
        <img v-if="isOpen.brand" src="/svg/arrow_top.svg" alt="arrow_top" /><img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.brand">
        <li v-for="brand in brands" :key="brand.id">
          <input type="checkbox" :value="brand.name" v-model="selectedBrands" />
          {{ brand.name }}
        </li>
      </ul>
    </div>
    <div class="w-94">
      <div
        @click="toggleFilter('brand')"
        class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
      >
        <p class="text-white text-xl font-semibold">Материалы</p>
        <img v-if="isOpen.brand" src="/svg/arrow_top.svg" alt="arrow_top" /><img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.material">
        <li v-for="material in materials" :key="material.id">
          <input
            type="checkbox"
            :value="material.name"
            v-model="selectedMaterials"
          />
          {{ material.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: "Montserrat";
}
/* .filters-container {
  width: 20%;
  padding-right: 20px;
}

.filter-group h3 {
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 5px;
}

.filter-group ul {
  list-style-type: none;
  padding-left: 0;
}

.filter-group li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.main-block {
  width: 75%;
  height: auto;
  float: right;
}

body {
  background-color: #fafafa;
  color: #333;
  font-family: Arial, sans-serif;
} */
</style>
