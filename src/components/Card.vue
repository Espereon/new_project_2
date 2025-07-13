<script setup>
defineProps({
  id: Number,
  urlImg: String,
  name: String,
  size: String,
  material: String,
  price: Number,
  onClickFavorite: Function,
  onClickAdd: Function,
  isFavorite: Boolean,
  isAdded: Boolean,
});
</script>

<template>
  <div class="flex flex-col w-[375px] h-[600px] box center">
    <img
      class="ml-[51px] mt-[20px] w-[270px] h-[240px] mb-[52px]"
      :src="urlImg"
      alt="knife_1"
    />
    <div class="ml-[20px] mr-[20px] mb-[29px] flex flex-col">
      <b>{{ name }}</b>
      <div class="mb-[11px] flex justify-between">
        <p>{{ size }}</p>
        <p>{{ material }}</p>
      </div>
      <div class="mb-[25.5px] flex justify-between">
        <p>звёзды</p>
        <p>отзывы</p>
      </div>
      <div class="border_line"></div>
      <div class="mb-[26px] flex justify-between">
        <b>{{ price }}</b>
        <div class="flex gap-[15px]">
          <img
            class="w-[26px] h-[24.62px]"
            src="/svg/compare.svg"
            alt="compare"
          />
          <img
            class="w-7 h-[25px] cursor-pointer"
            v-if="onClickFavorite"
            @click="onClickFavorite"
            :src="
              !isFavorite
                ? 'svg/favorite_cart.svg'
                : 'svg/favorite_cart_like.svg'
            "
            alt="favorite_cart"
          />
        </div>
      </div>
      <button
        @click="onClickAdd"
        class="w-[335px] h-[50px] bg-[#E8AA31] rounded-sm font-[Montserrat] flex items-center justify-center gap-4 text-lg text-white cursor-pointer"
      >
        В Корзину
        <img src="/svg/icon_cart.svg" alt="icon_cart" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.border_line {
  border-bottom: 2px solid #141414;
  width: 335px;
  margin-bottom: 20.5px;
}

b {
  color: rgb(20, 20, 20);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0%;
  text-align: left;
}

p {
  color: rgb(171, 171, 171);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0%;
  text-align: left;
}
</style>
