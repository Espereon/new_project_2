<script setup>
import Card from "./Card.vue";
defineProps({
  items: Array,
});
</script>

<template>
  <div class="relative">
    <img
      class="absolute w-screen max-h-full brightness-50"
      src="/background_img.png"
      alt="background_img"
    />
    <div class="relative center flex justify-between pt-4">
      <div>
        <h1 class="mb-7">Новинки</h1>
        <p class="text-white font-medium text-lg w-83 opacity-[0.7] mb-15">
          Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
          представлен наиболее широкий выбор Златоустовских ножей от
          Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
          поставщиками.
        </p>
        <div class="flex gap-5 items-center">
          <p class="text-xl font-semibold text-[#E8AA31]">Больше новинок</p>
          <img
            class="h-[16.99px] w-[9px]"
            src="/svg/arrow_rigth.svg"
            alt="arrow_rigth"
          />
        </div>
      </div>
      <div class="flex flex-col items-center gap-12">
        <div class="flex justify-between gap-7 pt-9">
          <Card
            v-for="item in items.slice(0, 3)"
            :key="item.id"
            :name="item.name"
            :price="item.price"
            :urlImg="item.img"
            :size="item.size"
            :material="item.material"
          />
        </div>
        <div class="text-white mb-12">Полоски</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 5%;
  text-align: left;
}

p {
  font-family: Montserrat;
}
</style>
