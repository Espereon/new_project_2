<script setup>
import CategoriesFilter from "../components/CategoriesFilter.vue";
import CategoriesMain from "../components/CategoriesMain.vue";
import Card from "../components/Card.vue";
import { useFetcherStore } from "../store/index";
const fetcher = useFetcherStore();
</script>

<template>
  <div class="center">
    <div class="center">
      <div class="text-2xl font-bold">Разделочные ножи</div>
      <div class="flex justify-between items-center">
        <div class="flex gap-4">
          <p class="font-medium text-base opacity-50">Главная</p>
          <img src="/svg/arrow_rigth_grey.svg" alt="" />
          <p class="text-[#E8AA31] font-medium text-base">Разделочные ножи</p>
        </div>
        <div>
          <select
            @change="onChangeSelect"
            class="py-2 px-3 border border-gray-100 rounded-md"
          >
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <CategoriesFilter />
      <div class="grid grid-cols-3 gap-7.5 center mb-15">
        <Card
          v-for="item in fetcher.items"
          :key="item.id"
          :name="item.name"
          :price="item.price"
          :urlImg="item.img"
          :size="item.size"
          :material="item.material"
        />
      </div>
    </div>
  </div>
</template>
