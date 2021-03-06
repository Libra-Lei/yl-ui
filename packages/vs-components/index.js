import Vue from 'vue'

import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

// 日期选择器
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/zh-cn';
Vue.use(DatePicker);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './loading_image_error.svg',
  loading: './loading.gif',
  attempt: 1
})
