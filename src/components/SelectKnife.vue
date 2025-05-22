<script setup>
const SelectKnifeArray = [
  "Ножи из дамаска",
  "Туристические ножи",
  "Ножи охотничьи",
  "Булатные ножи",
  "Ножи из дамаска",
  "Тактического назначения",
  "Метательные ножи",
  "Мачете и кукри",
  "Ножи кухонные",
];

const CreateKnifeArray = [
  "Ножи АИР",
  "Ножи ЗИК",
  "Ножи ЗЗОСС",
  "Ножи РОСоружие",
  "Ножи Оружейник",
  "Булат Сергея Баранова",
  "Булат Андрея Умерова",
  "Ножи Златко",
  "Ножи Стиль-М",
  "Оружейная компания",
];

const MarksKnifeArray = [
  "Ножи из стали 40х102С2М",
  "Ножи из стали 95х18",
  "Ножи из стали 100х13м",
  "Ножи из стали 110х18м-ШД",
  "Ножи из стали ЭИ-107 ТЦ",
  "Ножи из стали 50х14МФ",
  "Ножи из стали AUS-8",
  "Ножи из стали К340",
  "Ножи из стали M390",
  "Ножи из стали ЭП-766",
];

const EnchantKnifeArray = [
  "Паста ГОИ",
  "Алмазная паста",
  "Бруски и камни для заточки",
  "Заточные системы",
];

const WorkshopKnifeArray = [
  "Ножевые клинки",
  "Заготовки для ножей",
  "Литье для ножей",
  "Материалы для рукоятей",
  "Уход за рукоятиями ножей",
];
</script>

<template>
  <div class="bg-black self-start">
    <div
      class="center flex justify-between items-center text-white font-bold text-base cursor-pointer h-[79px]"
    >
      <p class="w-[219px]">Категория ножей</p>
      <p class="w-[198px]">Производство ножей</p>
      <p class="w-[225px]">Ножи по маркам стали</p>
      <p class="w-[250px]">Заточки и полировка ножей</p>
      <p class="w-[228px]">Ножевая мастерская</p>
    </div>
    <hr style="border: 0; height: 2px; background-color: #fff; opacity: 50%" />
    <div
      class="center text-white justify-between cursor-pointer text-base font-medium flex pt-7 pb-7"
    >
      <div class="flex flex-col gap-5 w-[219px]">
        <div v-for="item in SelectKnifeArray" :key="item.id">
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-[198px]">
        <div v-for="item in CreateKnifeArray" :key="item.id">
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-[225px]">
        <div v-for="item in MarksKnifeArray" :key="item.id">
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-[250px]">
        <div v-for="item in EnchantKnifeArray" :key="item.id">
          {{ item }}
        </div>
      </div>
      <div class="flex flex-col gap-5 w-[228px]">
        <div v-for="item in WorkshopKnifeArray" :key="item.id">
          {{ item }}
        </div>
      </div>
    </div>
    <hr style="border: 0; height: 2px; background-color: #fff; opacity: 50%" />
    <div
      class="center flex pb-7 pt-7 text-[#E8AA31] text-base cursor-pointer font-medium justify-between"
    >
      <p class="w-[219px]">Смотреть все</p>
      <p class="w-[198px]">Смотреть все</p>
      <p class="w-[225px]">Смотреть все</p>
      <p class="w-[250px]">Смотреть все</p>
      <p class="w-[228px]">Смотреть все</p>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: Montserrat;
}
</style>
