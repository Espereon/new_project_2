<script setup>
import CardItemList from "../components/CardItemList.vue";
import { inject, reactive, watch, ref, onMounted, computed } from "vue";
import axios from "axios";

// Референсы для хранения данных
const countries = ref([]); // Список стран
const materials = ref([]); // Список материалов
const sizes = ref([]); // Список размеров
const selectedMaterials = ref([]); // Выбранные материалы
const selectedCountries = ref([]); // Выбранные страны
const selectedSizes = ref([]); // Выбранные размеры
const isOpen = ref({
  materials: false,
  countries: false,
  sizes: false,
}); // Открытые секции фильтров

// Объект фильтров
const filters = reactive({
  searchQuery: "", // Поисковая фраза
  sortBy: "title", // Параметр сортировки
});

// Массив товаров
const items = ref([]);

// Инъекция корзины покупок
const { addToCart, removeFromCart, cart } = inject("cart");

// Метод смены параметра сортировки
const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

// Переключение открытого фильтра
const toggleFilter = (type) => {
  isOpen.value[type] = !isOpen.value[type];
};

// Обработка чекбокса выбора материала
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

// Обработка чекбокса выбора страны
const handleCountryCheckbox = (country) => {
  if (!selectedCountries.value.includes(country)) {
    selectedCountries.value.push(country);
  } else {
    selectedCountries.value.splice(selectedCountries.value.indexOf(country), 1);
  }
};

// Обработка чекбокса выбора размера
const handleSizeCheckbox = (size) => {
  if (!selectedSizes.value.includes(size)) {
    selectedSizes.value.push(size);
  } else {
    selectedSizes.value.splice(selectedSizes.value.indexOf(size), 1);
  }
};

// Вычисляемый фильтр товаров
const filteredItems = computed(() => {
  let result = [...items.value]; // Копия исходного массива товаров

  // Применяем фильтры по материалам
  if (selectedMaterials.value.length > 0) {
    result = result.filter((item) =>
      selectedMaterials.value.includes(item.material || "")
    );
  }

  // Применяем фильтры по странам
  if (selectedCountries.value.length > 0) {
    result = result.filter((item) =>
      selectedCountries.value.includes(item.country || "")
    );
  }

  // Применяем фильтры по размерам
  if (selectedSizes.value.length > 0) {
    result = result.filter((item) =>
      selectedSizes.value.includes(item.size || "")
    );
  }

  return result;
});

// Добавление/удаление из избранного
const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id,
      };
      item.isFavorite = true;
      const { data } = await axios.post(
        `https://8df3e567b5011083.mokky.dev/favorites`,
        obj
      );
      item.favoriteId = data.id;
      console.log(item.favoriteId);
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://8df3e567b5011083.mokky.dev/favorites/${item.favoriteId}`
      );
      item.favoriteId = null;
    }
  } catch (err) {
    console.log(err);
  }
};

// Клик по кнопке добавления в корзину
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

// Загрузка избранных товаров
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      `https://8df3e567b5011083.mokky.dev/favorites`
    );
    items.value = items.value.map((item) => {
      const favorite = favorites.find((fav) => fav.item_id === item.id);
      if (!favorite) {
        return item;
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

// Загрузка списка товаров
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    const { data } = await axios.get(
      `https://8df3e567b5011083.mokky.dev/items`,
      { params }
    );
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false,
    }));
  } catch (error) {
    console.log(error);
  }
};

// Инициализация страницы
onMounted(async () => {
  const localCart = localStorage.getItem("cart");
  cart.value = localCart ? JSON.parse(localCart) : [];

  await fetchItems(); // Получаем товары
  await fetchFavorites(); // Получаем избранные товары

  // Устанавливаем флаги наличия товаров в корзине
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }));

  // Заполняем уникальные материалы, страны и размеры
  const uniqueMaterials = new Set(items.value.map((item) => item.material));
  materials.value = Array.from(uniqueMaterials);

  const uniqueCountries = new Set(items.value.map((item) => item.country));
  countries.value = Array.from(uniqueCountries);

  const uniqueSizes = new Set(items.value.map((item) => item.size));
  sizes.value = Array.from(uniqueSizes);
});

// Наблюдатель за изменениями в корзине
watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false,
  }));
});

// Наблюдатель за изменением фильтров
watch(filters, fetchItems);
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
      <CardItemList
        :items="filteredItems"
        @add-to-favorite="addToFavorite"
        @on-click-add="onClickAddPlus"
      />
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
