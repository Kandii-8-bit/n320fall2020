import Vue from "vue";
import App from "./components/app.vue";
import Board from "./components/board.vue";
import Gamepieces from "./components/gamepieces.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  render: (h) => h(Board),
}).$mount("#board");

new Vue({
  render: (h) => h(Gamepieces),
}).$mount("#gamepieces");
