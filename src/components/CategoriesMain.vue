<template>
  <div class="center">
    <div class="text-2xl font-bold">Разделочные ножи</div>
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <p class="font-medium text-base opacity-50">Главная</p>
        <img src="/svg/arrow_rigth_grey.svg" alt="" />
        <p class="text-[#E8AA31] font-medium text-base">Разделочные ножи</p>
      </div>
      <div>
        <select class="py-2 px-3 border border-gray-100 rounded-md">
          <option value="name">По названию</option>
          <option value="price">По цене (дешевые)</option>
          <option value="-price">По цене (дорогие)</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style>
div {
  font-family: Montserrat;
}
</style>
