//处理兼容
import "@babel/polyfill";
// 引入 vuesax 包
import './vs-components'

// 表单设计器
import Alert from './components/alert'

// 引入样式
// import './less/design.less'

// 动态表单生成器

const components = [Alert];

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
  Alert
}
