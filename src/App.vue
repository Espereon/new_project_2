<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import SelectKnife from "./components/SelectKnife.vue";
import SelectBladeWeapons from "./components/SelectBladeWeapons.vue";
import SelectSouvenirProducts from "./components/SelectSouvenirProducts.vue";
import SelectFlashlight from "./components/SelectFlashlight.vue";
import SelectRelatedProducts from "./components/SelectRelatedProducts.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

const SelectKnifeOpen = ref(false);
const SelectBladeWeaponsOpen = ref(false);
const SelectSouvenirProductsOpen = ref(false);
const SelectFlashlightOpen = ref(false);
const SelectRelatedProductsOpen = ref(false);
const openSelectKnife = () => (SelectKnifeOpen.value = !SelectKnifeOpen.value);
const openBladeWeapons = () =>
  (SelectBladeWeaponsOpen.value = !SelectBladeWeaponsOpen.value);
const openSouvenirProducts = () =>
  (SelectSouvenirProductsOpen.value = !SelectSouvenirProductsOpen.value);
const openFlashlight = () =>
  (SelectFlashlightOpen.value = !SelectFlashlightOpen.value);
const openRelatedProducts = () =>
  (SelectRelatedProductsOpen.value = !SelectRelatedProductsOpen.value);

// const sections = [
//   "SelectKnife",
//   "SelectBladeWeapons",
//   "SelectSouvenirProducts",
//   "SelectFlashlight",
//   "SelectRelatedProducts",
// ];

// const selectedSection = ref(null);
// const openSection = (sectionName) => {
//   if (selectedSection.value === sectionName) {
//     selectedSection.value = null;
//   } else {
//     selectedSection.value = sectionName;
//   }
// };
</script>

<template>
  <div>
    <Header />
    <Menu
      @open-select-knife="openSelectKnife"
      @open-blade-weapons="openBladeWeapons"
      @open-souvenir-products="openSouvenirProducts"
      @open-flashlight="openFlashlight"
      @open-related-products="openRelatedProducts"
    />
    <SelectKnife class="absolute z-10 w-full" v-if="SelectKnifeOpen" />
    <SelectBladeWeapons
      class="absolute z-10 w-full"
      v-if="SelectBladeWeaponsOpen"
    />
    <SelectSouvenirProducts
      class="absolute z-10 w-full"
      v-if="SelectSouvenirProductsOpen"
    />
    <SelectFlashlight
      class="absolute z-10 w-full"
      v-if="SelectFlashlightOpen"
    />
    <SelectRelatedProducts
      class="absolute z-10 w-full"
      v-if="SelectRelatedProductsOpen"
    />
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
