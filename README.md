# Vue UI Components
> 基于 vuesax 的 UI 组件库

## 一、在线预览地址
[表单设计器](https://libra-lei.github.io/yl-form-design)

## 二、安装和使用
### 安装模块
```
# npm
npm i @libra-lei/yl-ui
```
```
# yarn
yarn add @libra-lei/yl-ui
```

### 使用
``` javascript
import YlFormDesign from 'yl-form-design'
import 'yl-form-design/dist/yl-form-design.css'
Vue.use(YlFormDesign)
```
``` Vue
<template>
  <div id="app">
    <yl-form-design></yl-form-design>
  </div>
</template>
```