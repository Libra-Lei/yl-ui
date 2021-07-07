# Tag 组件
::: tip 提示
可传入文字、图标。
:::
## 基础用法
::: demo 
```html
<template>
  <div style="display: flex; align-items: center;">
    <yl-tag style="margin-right: 4px;" />
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

## 颜色
::: demo 
```html
<template>
  <div style="flex">
    <ul style="list-style: none; display: flex; align-items: center;">
      <li
        v-for="item in demo"
        :key="item"
      >
        <yl-tag
          style="margin-right: 4px;"
          :color="item"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
      demo: [
        'primary',
        'success', 
        'danger',
        'warning',
        'dark', '#c57e7e',
        'rgba(76, 180, 226, 1)'
      ]
    }
  }
}
</script>
```
:::

## 文字和图标
::: demo 图标见 《Icon》
```html
<template>
  <div style="flex">
    <ul style="list-style: none; display: flex; align-items: center;">
      <li
        v-for="item,index in demo"
        :key="index"
      >
        <yl-tag
          style="margin-right: 4px;"
          :text="item.text"
          :icon="item.icon"
          :color="item.color"
          :text-color="item.textColor"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  data() {
    return {
      demo: [
        { color: 'success', text: '待签发', icon: 'check_order' },
        { color: 'primary', text: '待审核', icon: 'running_order' },
        { color: 'warning', text: '已开工', icon: 'sign_order' },
        { color: '#333333', text: '已验收', icon: 'start_order', textColor: 'red' }
      ]
    }
  }
}
</script>
```
:::

## Attribute
| 参数      | 类型    | 说明                        | 可选值        | 默认值 |
| :---     | :---:    | :---                       | :---:         | :---:  |
| color    | string  | 背景色，可自定义              | primary/success/warning/danger/dark     | primary    |
| text     | string  | 文字                        | -- | -- |
| icon     | string  | 图标，支持《icon》中的图标      | -- | -- |
| textColor | string  | 字体颜色                    | -- | -- |
| size     | string  | 在没有 text 时有效，定义圆点tag大小 | -- | 12px |
| fontSize | string  | text 大小                    | -- | 1rem |
| borderRadius | string  | 自定义圆角                    | -- | -- |
