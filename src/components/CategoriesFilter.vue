<script setup>
import { ref, onMounted, watch } from "vue";
import { useFetcherStore } from "../store/index";

const fetcher = useFetcherStore();
const countries = ref([]);
const materials = ref([]);
const sizes = ref([]);

const isOpen = ref({
  materials: false,
  countries: false,
  sizes: false,
});

const toggleFilter = (type) => {
  isOpen.value[type] = !isOpen.value[type];
};

onMounted(async () => {
  await fetcher.fetchItems();
  const uniqueMaterials = new Set(fetcher.items.map((item) => item.material));
  const uniqueCountry = new Set(fetcher.items.map((item) => item.country));
  const uniqueSizes = new Set(fetcher.items.map((item) => item.size));
  materials.value = Array.from(uniqueMaterials);
  countries.value = Array.from(uniqueCountry);
  sizes.value = Array.from(uniqueSizes);
});

watch(
  materials,
  () => {
    console.log("Список материалов обновлен:", materials.value);
  },
  { deep: true }
);
watch(
  countries,
  () => {
    console.log("Список материалов обновлен:", countries.value);
  },
  { deep: true }
);
watch(
  sizes,
  () => {
    console.log("Список материалов обновлен:", sizes.value);
  },
  { deep: true }
);
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
        @click="toggleFilter('materials')"
        class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
      >
        <p class="text-white text-xl font-semibold">Материалы</p>
        <img v-if="isOpen.materials" src="/svg/arrow_top.svg" alt="arrow_top" />
        <img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.materials">
        <li v-for="material in materials" :key="material">
          <input type="checkbox" :value="material" /> {{ material }}
        </li>
      </ul>
    </div>
    <div class="w-94">
      <div
        @click="toggleFilter('country')"
        class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
      >
        <p class="text-white text-xl font-semibold">Страна производитель</p>
        <img v-if="isOpen.countries" src="/svg/arrow_top.svg" alt="arrow_top" />
        <img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.country">
        <li v-for="country in countries" :key="country">
          <input type="checkbox" :value="country" /> {{ country }}
        </li>
      </ul>
    </div>
    <div class="w-94">
      <div
        @click="toggleFilter('sizes')"
        class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
      >
        <p class="text-white text-xl font-semibold">Размер</p>
        <img v-if="isOpen.sizes" src="/svg/arrow_top.svg" alt="arrow_top" />
        <img
          v-else
          class="rotate-180"
          src="/svg/arrow_top.svg"
          alt="arrow_bottom"
        />
      </div>
      <ul v-show="isOpen.sizes">
        <li v-for="size in sizes" :key="size">
          <input type="checkbox" :value="size" />
          {{ size }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: "Montserrat";
}

ul {
  margin-top: 20px;
}

li {
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 20px;
  color: #141414;
  gap: 15px;
}
</style>
