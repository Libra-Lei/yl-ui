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
