/*
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-07-07 15:59:45
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 16:00:28
 */

import Tag from './src'

Tag.install = (Vue) => {
  Vue.component(Tag.name, Tag);
}

export default Tag;
