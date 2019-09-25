// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'jquery'

import '@/filter/filter.js'
import iView from 'iview';
import '../my-theme/index.less';
Vue.use(iView);

Vue.config.productionTip = false
import './mock/mock'

import storage from './utils/cookie'
Vue.prototype.$storage= storage

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
