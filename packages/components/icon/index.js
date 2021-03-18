import Icon from './src'

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon);
}

export default Icon;