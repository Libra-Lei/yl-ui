---
home: true // 是否首页
actionText: 快速上手 →
actionLink: /components/base/radio
features:
- title: 高阶定制
  details: 定制组件
footer: MIT Licensed | Copyright © 2020-present Libra Lei
---
``` bash
# npm
npm i @libra-lei/yl-ui
# OR yarn
yarn add @libra-lei/yl-ui
```
### 引入
#### 完整引入
``` javascript
import Vue from 'vue';

// 引入样式文件
import '@libra-lei/yl-ui/lib/yl-ui.css'
// 完整引入
import YlUI from '@libra-lei/yl-ui'
Vue.use(YlUI)

// 或者按需引入
import { Radio, UploadMini } from '@libra-lei/yl-ui';
Vue.component(Radio.name, Radio);
Vue.component(UploadMini.name, UploadMini);
```
