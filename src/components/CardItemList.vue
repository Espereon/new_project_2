<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
  isFavorites: Boolean,
});

const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>

<template>
  <div class="grid grid-cols-3 gap-7.5 center">
    <Card
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :price="item.price"
      :urlImg="item.img"
      :size="item.size"
      :material="item.material"
      :onClickFavorite="isFavorites ? null : () => emit('addToFavorite', item)"
      :onClickAdd="isFavorites ? null : () => emit('addToCart', item)"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>

<style>
.box {
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  background: rgb(254, 254, 254);
}
</style>
