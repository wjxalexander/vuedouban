// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import { InfiniteScroll } from 'mint-ui';
import Icon from 'components/icon'
Vue.use(InfiniteScroll);
//全局引入mint的CSS
import 'assets/main.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('j-icon',Icon)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
