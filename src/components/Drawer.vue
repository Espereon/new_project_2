<script setup>
import DrawerItemList from "./DrawerItemList.vue";
const emit = defineEmits(["closeDrawer"]);
</script>
<template>
  <div>
    <div
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
    ></div>
    <div class="bg-white w-100 h-full fixed right-0 top-0 z-20 p-8">
      <div class="flex items-center gap-5 mb-8">
        <svg
          @click="() => emit('closeDrawer')"
          class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H14.7143"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2 class="text-3xl font-bold">Корзина</h2>
      </div>
    </div>
    <DrawerItemList />
  </div>
</template>
