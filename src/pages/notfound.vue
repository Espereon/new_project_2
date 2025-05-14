<script setup></script>

<template>
  <div class="center">
    <h1>Ой! Страница не найдена :(</h1>
    <p>
      Похоже, запрашиваемая вами страница была удалена, переименована или
      временно недоступна.
    </p>
    <a href="/">Вернуться на главную страницу</a>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  color: #333;
  text-align: center;
  padding-top: 10%;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
}

a {
  display: inline-block;
  margin-top: 30px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ff7b54;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

a:hover {
  background-color: #d66a4c;
}
</style>
