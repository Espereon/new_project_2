<script setup>
const emit = defineEmits(["openDrawer"]);
</script>

<template>
  <div class="bg-[#ecf2f1]">
    <div class="center bg-black h-[70px] flex items-center justify-between">
      <div class="text-base text-white flex flex-row gap-[60px]">
        <p>О нас</p>
        <p>Оплата и доставка</p>
        <p>Новости</p>
        <p>Контакты</p>
      </div>
      <div class="flex gap-[15px]">
        <img src="/svg/login.svg" alt="login" />
        <p class="text-lg text-white">Личный кабинет</p>
      </div>
    </div>
    <div class="center h-[90px] flex flex-row justify-between items-center">
      <div class="flex items-center gap-[158px]">
        <img src="/svg/logo.svg" alt="logo" />
        <div class="relative flex">
          <img class="absolute left-4 top-4" src="/svg/search.svg" />
          <input
            class="border-2 border-gray-400 rounded-md py-2 pl-[42px] pr-4 focus:border-black-400"
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div class="flex items-center gap-[30px]">
        <div class="flex gap-[50px] text-lg text-b">
          <div class="flex items-center gap-[10px]">
            <img src="/svg/location_icon.svg" alt="location" /> <b>Москва</b>
          </div>
          <div>
            <b>8-800-777-49-67</b>
            <div class="flex items-center gap-[10px]">
              <b class="text-[#E8AA31]">Заказать звонок</b>
              <img src="/svg/arrow_botton.svg" alt="arrow_btn" />
            </div>
          </div>
        </div>
        <router-link to="/favorites"
          ><img src="/svg/favorite_icon.svg" alt="favorite"
        /></router-link>
        <img
          class="cursor-pointer"
          @click="() => emit('openDrawer')"
          src="/svg/cart_icon.svg"
          alt="cart"
        />
        <div>
          <p>0 р.</p>
          <p class="text-base text-[#E8AA31]">Оформите заказ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
b {
  cursor: grab;
}

p {
  font-family: Montserrat;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  cursor: grab;
}
</style>
