<!-- =========================================================================================
    File Name: YlUploadMini.vue
    Description: 文件上传组件，支持多文件(轻量级)
    Component Name: YlUploadMini
    Author: Libra
    updateTime: 2020-4-30
    ----------------------------------------------------------------------------------------
    v-model: 当前选择文件数组
      [{ uuid: '组件内标识文件的唯一id', name: '本地文件名称', file: File, size: '文件原始大小', sizeText: '近似求值后的大小，有单位' }]
    ----------------------------------------------------------------------------------------
    props:
      accepts: [''] // 限制上传文件类型
      multiple: false // 是否是多文件上传，默认false
========================================================================================== -->

<template>
  <div class="ly-upload-mini">
    <div class="ly-upload-mini-input-container">
      <input
        :accept="accepts"
        :multiple="multiple"
        ref="fileInput"
        type="file"
        @change="getFiles"
        >
      <div class="ly-upload-mini-input-container-text">
        <vs-icon icon="upload" class="upload-icon" />
        <h1 class="ml-2 text-base">拖拽文件到此处或点击选择</h1>
      </div>
    </div>
    <ul class="ly-upload-mini-list">
      <li
        class=""
        v-for="(item, index) in fileArr"
        :key="`file${index}`"
      >
        <h2 class="name" :title="item.name">{{ item.name }}</h2>
        <div class="size">
          <span class="size-text">{{ item.sizeText }}</span>
          <vs-icon
            class="size-remove-icon"
            icon="close"
            @click="removeFile(item.uuid)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'YlUploadMini',
  data() {
    return {}
  },
  model: {
    prop: 'fileArr',
    event: 'change'
  },
  props: {
    fileArr: {
      type: Array,
      default: () => { return [] }
    },
    accepts: {
      type: Array,
      default: () => { return [] }
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    removeFile(uuid) {
      // clear input value , 防止删除的文件不能再上传触发change
      this.$refs.fileInput.value = '';
      this.$emit('change', this.fileArr.filter(x => x.uuid !== uuid));
    },
    getFiles(e) {
      const _this = this
      const files = e.target.files;
      // 上一次的文件
      let arr = _this.fileArr.slice();
      for (const file in files) {
        // if (files.hasOwnProperty(file)) {
        if (Object.prototype.hasOwnProperty.call(files, file)) {
          const filex = files[file];
          let size = Math.floor(filex.size / 1024);
          let unit = 'kb';
          if (size > 1024) {
            size = Math.floor(size / 1024);
            unit = 'Mb';
          }
          const temp = {
            uuid: uuidv4(),
            file: filex,
            size: filex.size,
            sizeText: `${size} ${unit}`,
            name: filex.name
          }
          if (_this.multiple) {
            arr.push(temp);
          } else {
            arr = [temp]
          }
        }
      }
      _this.$emit('change', arr);
    }
  }
}
</script>

<style lang="less" scoped>
.ly-upload-mini {
  &-input-container {
    position: relative;
    border: 2px dashed #eeeeee;
    border-radius: 8px;

    &-text {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 14px;

      h1 {
        font-size: 14px;
      }

      .upload-icon {
        color: #888888;
        font-size: 24px;
        margin-right: 4px;
      }
    }

    input {
      cursor: pointer;
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  &-list {
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 1px;

      .name {
        font-size: 14px;
        max-width: 196px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .size {
        display: flex;
        align-items: center;
        &-text {
          font-size: 12px;
          margin-right: 14px;
        }
        &-remove-icon {
          cursor: pointer;
          &:hover {
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
