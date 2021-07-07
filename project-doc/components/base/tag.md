# Tag 组件
::: tip 提示
可传入文字、图标。
:::
## 基础用法
::: demo 
```html
<template>
  <div>
    <yl-tag />
    <yl-tag :icon="'running_order'" :text="'已签发'"/>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
    }
  }
}
</script>
```
:::

## Attribute
| 参数      | 类型    | 说明                        | 可选值        | 默认值 |
| :---     | :---    | :---                       | :---         | :---  |
| accepts  | array   | 允许上传的文件类型            | ['.jpg']     | []    |
| multiple | boolean | 是否允许多文件上传            | true / false | false |
| v-model  | array   | 绑定值，选择的文件列表         | --           | []    |
