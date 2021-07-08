# UploadTable 上传组件
::: tip 提示
高阶上传组件：
点击、拖拽上传；“列表模式” 和 “卡片模式”显示模式；
:::
## 基础用法
::: demo 注意：`v-model` 和 `uploaded` 共同组成展示的文件列表，上传时，**应仅上传 v-model**, 并且上传（或删除）成功后需要更新 `v-model` 和 `uploaded`
```html
<template>
  <div>
    <yl-upload-table
      :uploaded="uploaded"
      v-model="files"
      @delete="handleDelete"
      @upload-all="handleUpload"
    />
  </div>
</template>

<script>
export default {
  name: 'UploadTable',
  data() {
    return {
      uploaded: [
        {
          uuid: 'abcdfgfgh1',
          name: '示例文件1',
          size: null,
          uploadTime: '2021年3月3日',
          key: null,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1160360589,2429665544&fm=26&gp=0.jpg',
          type: 'image'
        },
        {
          uuid: 'abcdfgfgh2',
          name: '示例文件2',
          size: null,
          uploadTime: '2021年3月4日',
          key: null,
          src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3634138358,495714429&fm=11&gp=0.jpg',
          type: 'image'
        }
      ],
      files: []
    }
  },
  methods: {
    handleDelete(id) {
      // 1. 从服务端删除 文件

      // 2. 更新 uploaded
      this.uploaded = this.uploaded.filter(x => x.uuid !== id);
    },
    handleUpload() {
      // 1. 上传 files 到服务端
      // 2. 剔除已上传的文件
      this.files = [];
      // 3. 更新 uploaded
      // this.uploaded = 上传成功后服务端返回的最新列表
    }
  }
}
</script>
```
:::

## Attribute
| 参数      | 类型    | 说明                        | 可选值        | 默认值 |
| :---     | :---    | :---                       | :---         | :---  |
| accepts  | array   | 允许上传的文件类型            | ['.jpg']     | []    |
| multiple | boolean | 是否允许多文件上传            | true / false | false |
| uploaded | array   | 已经上传到服务端的文件列表，用于回显和比较下面的 v-model | -- | [] |
| v-model  | array   | 绑定值，待上传的文件列表，区别于 uploaded；组件显示的列表 = uploaded + value; | -- | [] |

## Event
| 事件名      | 说明    | 参数  |
| :---       | :---   | :--- |
| delete     | 删除文件触发（删除未上传的文件不会触发）| function(id) |
| upload-all | 点击上传文件触发 | -- |

## uploaded / v-model 属性说明
| 字段名      | 说明 |
| :---       | :---   |
| key        | 文件组件内的唯一标识, 数据回显时候设置为 null 即可 |
| src        | 图片文件预览地址，或者文件（base64压缩等） |
| name       | 文件名称 |
| size       | 文件大小 |
| uploadTime | 上传时间 |
| type       | 文件类 --> image：图片文件， 其他：其他文件 |
| uuid       | 文件唯一标识id, 用于组件调用者自行区分文件（例如：设置为服务端id） |
| file       | File 对象 |