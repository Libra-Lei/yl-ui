# Radio 单选框组件
::: tip 提示
> 允许自定义颜色的单选框组件
:::

## 基础用法
::: demo 示例
```html
<template>
  <div class="radio">
    <ul class="demo-ul">
      <li
        :class="{'mr-3': index < colorsRadio.length - 1}"
        v-for="(item, index) in colorsRadio"
        :key="`color-radio-${index}`"
      >
        <yl-radio
          :yl-value="item"
          :yl-label="item.label"
          :color="item.color"
          v-model="model"
        />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Radio',
  data() {
    return {
      colorsRadio: [
        { color: '115,103,240', label: '蓝色' },
        { color: '255,159,67', label: '橙色' },
        { color: '234,84,85', label: '红色' },
        { color: '40,199,111', label: '绿色' },
        { color: '66,153,225', label: '天蓝色' },
        { color: '56,178,172', label: '天青色' },
        { color: '159,122,234', label: '紫色' },
        { color: '237,100,166', label: '粉色' }
      ],
      model: null
    }
  }
}
</script>

<style>
.radio {
  height: 100%;
}
.demo-ul {
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
```
:::

## Attribute
| 参数      | 类型   | 说明                        | 可选值 | 默认值 |
| :---     | :---   | :---                       | :--- | :--- |
| yl-label | string | 文字标签                     | -- | -- |
| yl-value | object | 绑定的值                     | -- | -- |
| yl-name  | string | name                       | -- | ylLabel |
| color    | string | 单选框的颜色，仅支持 rgb 三个值 | -- | 115,103,240 |
| v-model  | object | 绑定值，选中的选项            | -- | 115,103,240 |