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
    sidebar: [
      {
        title: '基础组件',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/components/base/radio', 'Radio'],
          ['/components/base/upload', 'Upload']
        ]
      },
      {
        title: '高阶组件',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/components/high/upload-table', 'UploadTable']
        ]
      }
    ]
  },
  plugins: ['demo-container']
}