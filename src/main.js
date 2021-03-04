import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

import YlUi from '../packages'
Vue.use(YlUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
