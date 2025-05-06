<script setup>
import { ref } from "vue";
import axios from "axios";

// const items = ref([]);

// async function fetchKnifes() {
//   try {
//     const response = await axios.get(
//       "https://8df3e567b5011083.mokky.dev/info_knifes"
//     );
//     items.value = response.data;
//   } catch (err) {
//     console.error(err);
//   }
// }
// fetchKnifes();
</script>

<template>
  <div class="center bg-white mt-25 mb-[166px] gap-[30px] flex flex-wrap">
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px]">
        <b>Каталог ножей</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_1.png"
        alt="knife_1"
        class="top-[30px] absolute left-[258px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px]">
        <b>Среднеклинковое оружие</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_2.png"
        alt="knife_2"
        class="absolute left-[238px] top-[28px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px]">
        <b>Длинноклинковое оружие</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_3.png"
        alt="knife_3"
        class="absolute left-[191px] top-[62px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px]">
        <b>Сувенирные изделия</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_4.png"
        alt="knife_4"
        class="absolute left-[300px] top-[31px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px]">
        <b>Сопутствующие товары</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_5.png"
        alt="knife_5"
        class="absolute left-[255px] top-[45px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <div class="mt-[30px] ml-[30px] z-1">
        <b>Ножевая мастерская</b>
        <div class="border_line"></div>
        <ul class="gap-[10px] text-lg">
          <li>Разделочные</li>
          <li>Турестические</li>
          <li>Охотничные</li>
        </ul>
      </div>
      <img
        src="/info_knife_6.png"
        alt="knife_6"
        class="absolute left-[188px]"
      />
    </div>
  </div>
</template>

<style scoped>
b {
  font-size: 24px;
  font-family: "Montserrat";
}

li::before {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0%;
  text-align: left;
  content: "•";
  float: left;
  padding: 0 0.5em 0 0;
  color: #e8aa31;
}
.border_line {
  width: 68px;
  border-bottom: 2px solid #e8aa31;
  margin-bottom: 31px;
  margin-top: 14px;
}

.box {
  background: #ffffff;
  height: 293px;
  width: 509px;
  box-shadow: 5px 10px 10px 5px rgba(34, 60, 80, 0.2);
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>
