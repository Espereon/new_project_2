<template>
  <div>
    <div>
      <img
        class="w-screen h-197 brightness-20 absolute"
        src="/background_img.png"
        alt="background"
      />
    </div>
    <div class="flex justify-between relative">
      <div class="center mt-[48px] text-balance">
        <h1 class="pb-[15px]">Интернет магазин сертифицированных</h1>
        <h2 class="pb-[30px]">златоустовских ножей</h2>
        <p class="text-xl w-[915px] text-white pb-[60px]">
          Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
          представлен наиболее широкий выбор Златоустовских ножей от
          Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
          поставщиками.
        </p>
        <button
          class="h-[50px] w-[228px] rounded-md border-[#E8AA31] bg-[#E8AA31] text-white text-xl cursor-pointer font-semibold"
        >
          Подробнее
        </button>
      </div>
      <div class="mt-[30px] pr-[262px]">
        <img src="/knives.png" alt="knives" />
      </div>
    </div>
    <div
      class="flex text-xl gap-[180px] relative pt-[48px] pb-[57px] center text-center"
    >
      <div
        class="flex justify-between flex-col items-center gap-[15px] w-[265px]"
      >
        <img src="/ok_icon.svg" alt="ok" />
        <p>Гарантия 100% возврата денежных средств</p>
      </div>
      <div
        class="flex justify-between flex-col items-center gap-[15px] w-[275px]"
      >
        <img src="/delivery_icon.svg" alt="delivery" />
        <p>Доставка по России, Казахстану и Белоруссии</p>
      </div>
      <div
        class="flex justify-between flex-col items-center gap-[15px] w-[295px]"
      >
        <img src="/select_icon.svg" alt="select" />
        <p>Возможность оформление заказа без регистрации.</p>
      </div>
      <div
        class="flex justify-between flex-col items-center gap-[15px] w-[225px]"
      >
        <img src="/percent_icon.svg" alt="percent" />
        <p>Скидки постоянным покупателям.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  color: rgba(255, 255, 255, 0.7);
  font-family: Montserrat;
  line-height: 30px;
  letter-spacing: 3%;
}
h1 {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 3%;
}

h2 {
  color: rgb(255, 255, 255);
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  line-height: 46px;
  letter-spacing: 3%;
}
</style>
