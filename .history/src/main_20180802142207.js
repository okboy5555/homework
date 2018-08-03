import Vue from 'vue';
import App from './App.vue';
import { List } from 'vant';
import { Cell, CellGroup , Van } from 'vant';
import VueJsonp from 'vue-jsonp';
Vue.use(Cell).use(CellGroup);
Vue.use(List);
vue.use(VueJsonp)
new Vue({
  el: '#app',
  render: h => h(App)
});
