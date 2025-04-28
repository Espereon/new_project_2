<script setup></script>

<template>
  <div class="mt-[100px] ml-[166px] mb-[166px] gap-[30px] flex flex-wrap">
    <div class="box relative overflow-hidden">
      <h2>Каталог ножей</h2>
      <img
        src="/info_knife_1.png"
        alt="knife_1"
        class="top-[30px] absolute left-[258px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <h2>Среднеклинковое оружие</h2>
      <img
        src="/info_knife_2.png"
        alt="knife_2"
        class="absolute left-[238px] top-[28px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <h2>Длинноклинковое оружие</h2>
      <img
        src="/info_knife_3.png"
        alt="knife_3"
        class="absolute left-[191px] top-[62px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <h2>Сувенирные изделия</h2>
      <img
        src="/info_knife_4.png"
        alt="knife_4"
        class="absolute left-[300px] top-[31px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <h2>Сопутсвтующие товары</h2>
      <img
        src="/info_knife_5.png"
        alt="knife_5"
        class="absolute left-[255px] top-[45px]"
      />
    </div>
    <div class="box relative overflow-hidden">
      <h2>Ножевая мастерская</h2>
      <img
        src="/info_knife_6.png"
        alt="knife_6"
        class="absolute left-[188px]"
      />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 24px;
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
