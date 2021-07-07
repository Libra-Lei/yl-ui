# CheckboxGroup 组件
::: tip 提示
带全选的勾选框组
:::
## 基础用法
::: demo 
```html
<template>
  <div>
    <yl-check-group
      :list="list"
      yl-name="ordertype"
      direction="horizontal"
      v-model="selected"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '巡检',
          value: 1
        },
        {
          label: '维护',
          value: 2
        },
        {
          label: '实验',
          value: 3
        },
        {
          label: '大小修',
          value: 4
        },
        {
          label: '培训',
          value: 5
        },
        {
          label: '其他',
          value: 6
        }
      ],
      selected: []
    }
  }
}
</script>
```
:::

## Attribute
| 参数 | 类型 | 说明 | 可选值 | 默认值 |
| :--- | :---: | :--- | :---: | :---: |
| list    | array | 勾选项 { label: '': value: '' } | -- | --  |
| ylName  | string | name | -- | -- |
| direction | string  | 布局方向 | 水平：horizontal 垂直：vertical | -- |
| v-model | array  | 勾选组 | -- | -- |
