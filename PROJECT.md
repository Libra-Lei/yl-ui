# 工程目录说明

```
|-- project-doc  组件库文档
|-- packages     组件库源码（入口）
    |-- fonts    字体库（）
|-- src          开发组件库调试用，普通的Vue工程
```

# 项目结构说明

* 组件库和文档是各自单独开发部署的；

* 组件库开发：packages 下 index.js 是入口，而 src 下是常规的 Vue 项目，供开发组件库调试用，在 src/main.js 中引入 packages 。

* 文档开发：需要再根目录安装发布后的最新组件库版本，然后在 project-doc/.vuepress/enhanceApp.js 中引入。（这样做的目的是保持文档和最新发布的组件库一致，而不是可开发中的组件库一致。）

* 文档开发基于 vuepress , 同时借助了 [vuepress-plugin-demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/) 插件。

* 文档发布：使用的 GitHub Pages , 所以打包编译文档后，整体项目提交 github 即可。
