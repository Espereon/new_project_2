import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import home from "./pages/home.vue";
import categories from "./pages/categories.vue";
import notfound from "./pages/notfound.vue";
import { createPinia } from "pinia";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/categories", name: "categories", component: categories },
  { path: "/:pathMatch(.*)*", name: "not-found", component: notfound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia);
app.mount("#app");
