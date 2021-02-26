::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <div class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Input something..."/>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
      <p> qqq </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
```
:::