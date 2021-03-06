# Upload 上传组件
::: tip 提示
简易的上传组件，可点击或者拖拽上传
:::
## 基础用法
::: demo 
```html
<template>
  <div>
    <yl-upload-mini v-model="files" />
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      files: []
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