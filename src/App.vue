<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import Drawer from "./components/Drawer.vue";
import { ref, watch, provide, computed } from "vue";

const cart = ref([]);

const drawerOpen = ref(false);

const closeDrawer = () => {
  drawerOpen.value = false;
};

const totalPrice = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price, 0);
});

const openDrawer = () => {
  drawerOpen.value = true;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", { cart, closeDrawer, openDrawer, addToCart, removeFromCart });
</script>

<template>
  <div>
    <Drawer
      :total-price="totalPrice"
      v-if="drawerOpen"
      @close-drawer="closeDrawer"
    />
    <Header :total-price="totalPrice" @open-drawer="openDrawer" />
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<style>
.center {
  padding-left: calc(50% - 794px);
  padding-right: calc(50% - 794px);
}
</style>
