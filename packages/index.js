//处理兼容
import "@babel/polyfill";
// 引入 vuesax 包
import './vs-components'

// 引入组件
import Radio from './components/radio'
import Icon from './components/icon'

import UploadMini from './components/upload-mini'
import UploadTable from './components/upload-table'

// 引入样式
// import './less/design.less'
// 引入字体
require('./fonts/style.css');

// 动态表单生成器

const components = [
  Radio,
  Icon,

  UploadMini,
  UploadTable
];

const install =  (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Radio,
  Icon,
  UploadMini,
  UploadTable
}
