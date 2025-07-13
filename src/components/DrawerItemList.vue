<script setup>
import DrawerItem from "./DrawerItem.vue";
import { inject } from "vue";
const { cart, removeFromCart } = inject("cart");
</script>
<template>
  <div>
    <DrawerItem
      v-for="item in cart"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :image-url="item.imageUrl"
    />
  </div>
</template>
