import Vue from 'vue';
import App from './App.vue';
import { List } from 'vant';
import { Cell, CellGroup , Van } from 'vant';
Vue.use(Cell).use(CellGroup);
Vue.use(List);
new Vue({
  el: '#app',
  render: h => h(App)
});
