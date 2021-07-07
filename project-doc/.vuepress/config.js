/*
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-02-26 13:48:17
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 17:09:53
 */
module.exports = {
  base: '/yl-ui/',
  title: 'YL-UI',
  description: 'yl-ui 组件库文档',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    search: true,
    lastUpdated: '最后更新时间',
    nav: [
      { text: 'GitHub', link: 'https://github.com/Libra-Lei/yl-ui', target:'_blank' }
    ],
    sidebar: [
      {
        title: '基础组件',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/components/base/icon', 'Icon'],
          ['/components/base/radio', 'Radio'],
          ['/components/base/upload', 'Upload'],
          ['/components/base/tag', 'Tag']
        ]
      },
      {
        title: '高阶组件',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/components/high/upload-table', 'UploadTable'],
          ['/components/high/checkbox-group', 'CheckboxGroup']
        ]
      }
    ]
  },
  plugins: ['demo-container']
}