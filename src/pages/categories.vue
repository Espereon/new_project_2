<script setup>
import { ref, watch, onMounted, computed } from "vue";
import Card from "../components/Card.vue";
import { useFetcherStore } from "../store/index";

const fetcher = useFetcherStore();
const selectedSort = ref("name");
const countries = ref([]);
const materials = ref([]);
const sizes = ref([]);
const selectedMaterials = ref([]);
const selectedCountries = ref([]);
const selectedSizes = ref([]);

const isOpen = ref({
  materials: false,
  countries: false,
  sizes: false,
});

const toggleFilter = (type) => {
  isOpen.value[type] = !isOpen.value[type];
};

const onChangeSelect = (event) => {
  selectedSort.value = event.target.value;
};

const sortItems = (criteria) => {
  if (criteria === "name") {
    fetcher.items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria === "price") {
    fetcher.items.sort((a, b) => a.price - b.price);
  } else if (criteria === "-price") {
    fetcher.items.sort((a, b) => b.price - a.price);
  }
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

watch(selectedSort, (newSort) => {
  sortItems(newSort);
});

const handleMaterialCheckbox = (material) => {
  if (!selectedMaterials.value.includes(material)) {
    selectedMaterials.value.push(material);
  } else {
    selectedMaterials.value.splice(
      selectedMaterials.value.indexOf(material),
      1
    );
  }
};

const handleCountryCheckbox = (country) => {
  if (!selectedCountries.value.includes(country)) {
    selectedCountries.value.push(country);
  } else {
    selectedCountries.value.splice(selectedCountries.value.indexOf(country), 1);
  }
};

const handleSizeCheckbox = (size) => {
  if (!selectedSizes.value.includes(size)) {
    selectedSizes.value.push(size);
  } else {
    selectedSizes.value.splice(selectedSizes.value.indexOf(size), 1);
  }
};

// Отфильтрованная версия массива элементов с учётом выбранных фильтров
const filteredItems = computed(() => {
  let result = [...fetcher.items]; // Создаем копию оригинального массива

  // Если выбраны материалы, фильтруем по ним
  if (selectedMaterials.value.length > 0) {
    result = result.filter((item) =>
      selectedMaterials.value.includes(item.material)
    );
  }

  // Если выбраны страны, фильтруем по странам
  if (selectedCountries.value.length > 0) {
    result = result.filter((item) =>
      selectedCountries.value.includes(item.country)
    );
  }

  // Если выбраны размеры, фильтруем по размерам
  if (selectedSizes.value.length > 0) {
    result = result.filter((item) => selectedSizes.value.includes(item.size));
  }

  return result;
});
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
            <img
              v-if="isOpen.materials"
              src="/svg/arrow_top.svg"
              alt="arrow_top"
            />
            <img
              v-else
              class="rotate-180"
              src="/svg/arrow_top.svg"
              alt="arrow_bottom"
            />
          </div>
          <ul v-show="isOpen.materials">
            <li v-for="material in materials" :key="material">
              <input
                type="checkbox"
                :value="material"
                @change="handleMaterialCheckbox(material)"
              />
              {{ material }}
            </li>
          </ul>
        </div>
        <div class="w-94">
          <div
            @click="toggleFilter('country')"
            class="h-12.5 pl-[30px] pr-[30px] bg-black flex justify-between items-center"
          >
            <p class="text-white text-xl font-semibold">Страна производитель</p>
            <img
              v-if="isOpen.countries"
              src="/svg/arrow_top.svg"
              alt="arrow_top"
            />
            <img
              v-else
              class="rotate-180"
              src="/svg/arrow_top.svg"
              alt="arrow_bottom"
            />
          </div>
          <ul v-show="isOpen.country">
            <li v-for="country in countries" :key="country">
              <input
                type="checkbox"
                :value="country"
                @change="handleCountryCheckbox(country)"
              />
              {{ country }}
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
              <input
                type="checkbox"
                :value="size"
                @change="handleSizeCheckbox(size)"
              />
              {{ size }}
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-7.5 center mb-15">
        <Card
          v-for="item in filteredItems"
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
