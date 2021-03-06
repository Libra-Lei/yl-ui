::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
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
