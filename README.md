# Vue UI Components
> 基于 vuesax 的 UI 组件库

## 一、在线预览地址
[YL-UI 在线文档](https://libra-lei.github.io/yl-ui)

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

### 引入
#### 完整引入
``` javascript
import YlUI from '@libra-lei/yl-ui'
Vue.use(YlUI)
```
#### 按需引入
``` js
import Vue from 'vue';
import { Radio, UploadMini } from '@libra-lei/yl-ui';

Vue.component(Radio.name, Radio);
Vue.component(UploadMini.name, UploadMini);
/* 或写为
 * Vue.use(Button)
 * Vue.use(UploadMini)
 */

```

# 注意：
本组件库尚在开发中...