import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Stage from "./views/Stage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/stage",
      name: "stage",
      component: Stage
    }
  ]
});
