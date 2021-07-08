<!-- =========================================================================================
    File Name: YlUploadTable.vue
    Description: 文件上传组件，支持多文件
    Component Name: YlUploadTable
    Author: Libra
    updateTime: 2020-4-2
    ----------------------------------------------------------------------------------------
    props:
    accepts: ['.jpg'] // 限制上传文件类型
    operatePermit: true // 操作权限
    uploaded: [] // 已上传的文件
    v-model: [] // 待上传的文件队列

    文件对象 
    {
      key: 组件内唯一标识,  // 数据回显时候设置为 null 即可
      src: '图片预览地址',
      name: '文件名称',
      size: '文件大小',
      uploadTime: '上传时间',
      type: '文件类型' // image
      uuid: '文件id, 用于服务端数据'
      file: File
    }
    ----------------------------------------------------------------------------------------
    Event：
    delete: 删除文件 参数id: 文件在服务器端的id
    uploadAll: 上传全部队列文件
========================================================================================== -->

<template>
  <div class="ly-upload">
    <div class="ly-upload-buttons">
      <div class="btns">
        <input multiple :accept="accepts" type="file" ref="buttonFileInput" @change="getFiles">
        <vs-button
          size="small"
          type="gradient"
          icon-pack="feather"
          icon="icon-plus"
          color="primary"
          class="btn"
          @click="$refs.buttonFileInput.click()"
          :disabled="!operatePermit"
          >选择文件</vs-button>
        <vs-button
          size="small"
          type="gradient"
          icon-pack="feather"
          icon="icon-upload-cloud"
          color="success"
          class="btn"
          @click="upload()"
          :disabled="!operatePermit"
          >上传选择文件</vs-button>
      </div>
      <vs-icon
        :icon="showModel === 'card'? 'list' : 'grid_view'"
        class="mode-icon"
        @click="switchShowModel"/>
    </div>

    <div 
      v-show="showModel === 'list'"
      class="ly-upload-list">
      <vs-table :data="showFiles" noDataText="暂无文件">
        <template slot="thead">
          <vs-th>文件名称</vs-th>
          <vs-th>文件大小</vs-th>
          <vs-th>上传时间</vs-th>
          <vs-th>操作</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr
            :state="tr.uuid? null : 'danger'"
            :key="indextr"
            v-for="(tr, indextr) in data">
            <vs-td :data="tr.name">
              {{ tr.name }}
            </vs-td>
            <vs-td :data="tr.size">
              {{ tr.size }}
            </vs-td>
            <vs-td :data="tr.uploadTime">
              {{ tr.uploadTime }}
            </vs-td>
            <vs-td>
              <div class="operate">
                <vs-button
                  color="danger" type="flat" icon="delete"
                  @click="removeFile(tr)"
                  :disabled="!operatePermit"
                  ></vs-button>
                <span v-if="!tr.uuid" class="text-danger">等待上传</span>
              </div>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>

    <div
      v-if="showModel === 'card'"
      class="ly-upload-card">
      <!-- 展示大图 -->
      <view-upload
        v-if="viewActive"
        :src="viewSrc" />
      <!-- 已拖拽到此处的文件缩略 -->
      <div
        class="ly-upload-image"
        v-for="(item, index) in showFiles"
        :key="index"
        >
        <!-- 图片文件缩略图预览 -->
        <img
          v-if="item.src && item.type === 'image'"
          v-lazy="item.src"
          alt="图片"
          :style="{
            maxWidth:item.orientation == 'h'?'100%':'none',
            maxHeight:item.orientation == 'w'?'100%':'none'
          }"
          @touchend="viewImage(item.src, $event)"
          @click="viewImage(item.src, $event)">
        <!-- 非图片类型文件预览：仅显示文件名称 -->
        <h2 v-else>
          <i
            translate="no"
            class="material-icons notranslate">
            description
          </i>
          <span>{{ item.name }}</span>
        </h2>
        <!-- 是否已上传提示信息 -->
        <div
          class="ly-upload-image-load-tip"
          v-if="!item.uuid">
          <i
            translate="no"
            class="material-icons notranslate">
            cloud_upload
          </i>
          <p class="text">等待上传</p>
        </div>
        <!-- 删除文件按钮 -->
        <button
          class="ly-upload-image-delete"
          type="button"
          @click="removeFile(item)"
          :disabled="!operatePermit"
          >
          <i
            translate="no"
            class="material-icons notranslate">
            clear
          </i>
        </button>
      </div>
      <!-- /已拖拽到此处的文件缩略 -->
      <!-- 输入框部分 -->
      <div
        class="ly-upload-input"
        >
        <input
          :accept="accepts"
          multiple
          ref="fileInput"
          type="file"
          @change="getFiles"
          >
        <div class="ly-upload-input-text">
          <vs-icon icon="cloud_upload" />
          <h1 class="">拖拽文件到此处或点击选择</h1>
        </div>
        <!-- <button
          type="button"
          title="上传文件"
          class="ly-upload-input-load-button"
          @click="upload()">
          <i
            translate="no"
            class="material-icons notranslate">
            cloud_upload
          </i>
        </button> -->
      </div>
      <!-- /输入框部分 -->
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import * as dayjs from 'dayjs'
import viewUpload from './view'

let lastTap = 0;
export default {
  name: 'YlUploadTable',
  components: { viewUpload },
  model: {
    prop: 'waiting',
    event: 'change'
  },
  props: {
    accepts: {
      type: Array,
      default: () => { return [] }
    },
    operatePermit: {
      type: Boolean,
      default: true
    },
    waiting: { // 双向绑定 待上传的文件
      type: Array,
      default: () => { return []; }
    },
    uploaded: { // 已上传的文件
      type: Array,
      default: () => { return []; }
    }
  },
  data() {
    return {
      showModel: 'card',
      viewActive: false,
      viewSrc: null
    }
  },
  computed: {
    showFiles() { // 展示： 待上传 + 已上传
      return this.waiting.concat(this.uploaded);
    },
    filesQueue: {
      get: function() {
        return this.waiting;
      },
      set: function(v) {
        console.log('v: ', v);
        // this.$emit('change', JSON.parse(JSON.stringify(v)));
        this.$emit('change', [].concat(v));
      }
    }
  },
  methods: {
    upload() {
      if (this.filesQueue.length <= 0) {
        this.$vs.notify({
          color: 'warning',
          text: '没有待上传的文件，请先选择文件，再上传。'
        });
      } else {
        this.$emit('upload-all');
      }
    },
    removeFile(item) {
      if (!item.uuid) {
        this.filesQueue = this.filesQueue.filter(x => x.key !== item.key);
      } else {
        this.$vs.dialog({
          color: 'danger',
          title: `注意`,
          text: `您确定要删除《${item.name}》吗？`,
          acceptText: '删除',
          canceltText: '放弃',
          accept: () => {
            this.$emit('delete', item.uuid)
          }
        })
      }
    },
    switchShowModel() {
      if(this.showModel === 'card') this.showModel='list'
      else this.showModel='card'
    },
    viewImage(src, evt){
      var timeout;
      var eventx = (('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)) ? 'touchstart' : 'click';
      if(eventx == 'click'){
        this.viewActive = true
        this.viewSrc = src
      } else {
        if(evt.type == 'touchend'){
          var currentTime = new Date().getTime();
          var tapLength = currentTime - lastTap;
          clearTimeout(timeout);
          if (tapLength < 500 && tapLength > 0) {
            this.viewActive = true
            this.viewSrc = src
            event.preventDefault();
          }
          lastTap = currentTime;
        }
      }
    },
    getFiles(e) {
      const _this = this
      const files = e.target.files;

      // 文件分类
      const imageType = []
      const otherType = []
      for (const file in files) {
        if (Object.prototype.hasOwnProperty.call(files, file)) {
          const filex = files[file];
          if (/image.*/.test(filex.type)) {
            imageType.unshift(filex)
          } else {
            otherType.unshift(filex)
          }
        }
      }

      // 处理其他类型文件
      otherType.forEach(item => {
        const key = uuidv4();
        _this.filesQueue = [{
          key: key,
          src: null,
          name: item.name,
          size: item.size,
          uploadTime: dayjs().format('YYYY-MM-DD'),
          type: 'other',
          uuid: null,
          file: item
        }].concat(_this.filesQueue);
      })
      // 处理图片类型文件
      // 存储图片
      function switchImage(image, orientation, filex, key) {
        _this.filesQueue = [{
          key: key,
          src: image.src,
          name: filex.name,
          size: filex.size,
          uploadTime: dayjs().format('YYYY-MM-DD'),
          orientation: orientation,
          type: 'image',
          uuid: null,
          file: filex
        }].concat(_this.filesQueue);
      }
      function uploadImage(filex, key) {
        const reader  = new FileReader();
        reader.readAsDataURL(filex);
        reader.onload = (e) => {
          let orientation = 'h'
          const image = new Image();
          image.src = e.target.result;
          image.onload = function() {
            if(this.width > this.height){
              orientation = 'w'
            }
            switchImage(this, orientation, filex, key);
          }
        }
      }
      imageType.forEach(item => {
        const key = uuidv4()
        uploadImage(item, key)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ly-upload {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.14);
  table {
    display: table!important;
  }

  &-buttons {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btns {
      display: flex;
      align-items: center;
      .btn {
        box-shadow: 0 2px 8px 0 rgb(0 0 0 / 14%);
        &:last-child {
          margin-left: 14px;
        }
      }
    }

    .mode-icon {
      padding: 7px;
      border-radius: 7px;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.14);
      &:hover {
        background-color: rgba(115,103,240, .08);
        color: rgba(115,103,240, 1);
      }
    }

    input {
      display: none;
    }
  }

  &-list {
    .operate {
      display: flex;
      align-items: center;
    }
  }
  
  &-card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: wrap;
    border-radius: 3.5px;
  }

  &-image, &-input {
    width: 200px;
    height: 200px;
    margin: 16px;
  }
  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    position: relative;
    background-color: #fff;
    overflow:hidden;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,.1);
    h2 {
      font-size: 16px;
      font-weight: 600;
      position: relative;
      padding: 14px;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: flex;
      color: #626262;
      i {
        opacity: .05;
        position: absolute;
        font-size: 98px;
      }
    }
    &-delete {
      display: block;
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 0;
      margin: 0;
      z-index: 300;
      border: 0;
      cursor: pointer;
      border-radius: 10px;
      i {
        transition: all .2s ease;
        position: relative;
        padding: 4px;
        font-size: 1.4rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: rgba(0,0,0,.1);
        color: #fff;
        text-shadow: 0 3px 10px rgba(0,0,0,.5);
      }
      &:hover {
        border-radius: 50%;
        background: rgba(var(--vs-danger),1);
        i {
          border-radius: 50%;
        }
      }
    }
    &-load-tip {
      &.success {
        background: radial-gradient(ellipse at center,rgba(var(--vs-success),1) 0,transparent 70%);
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      z-index: 200;
      border-radius: 50%;
      width: 300px;
      height: 160px;
      border: 0;
      background: radial-gradient(ellipse at center,rgba(var(--vs-danger),1) 0,transparent 70%);
      cursor: pointer;
      transition: all .3s ease;
      animation: imageRebound .7s ease!important;
      &::after {
        content: "";
        width: 200px;
        height: 200px;
        position: absolute;
        z-index: 100;
        display: block;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 50%;
        border-radius: 50%;
        border: 1px solid rgba(var(--vs-success),1);
        animation: circle 1.5s ease infinite;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  &-input {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px dashed #dae1e7;
    border-radius: 7px;
    &-text {
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 7px;
      i {
        font-size: 56px;
      }
      h1 {
        font-size: 14px;
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
    &-load-button {
      position: absolute;
      border: 0;
      padding: 4px;
      border-radius: 0 0 5px 5px;
      padding-left: 6px;
      padding-right: 6px;
      font-size: .8rem;
      z-index: 500;
      cursor: pointer;
      margin: 0;
      color: rgba(var(--vs-primary),1);
      transition: all .2s ease;
      box-shadow: 0 0 0 0 rgba(0,0,0,.05);
      background: rgba(0,0,0,.03);
      bottom: 0;
      width: 100%;
      &:hover {
        padding-bottom: 10px;
        padding-top: 10px;
        background: rgba(var(--vs-primary),1);
        color: #fff;
      }
    }
  }
}

.theme-dark {
  .ly-upload {
    background-color: #262c49;
    // &-card, &-list {
    //   background-color: #10163a;
    // }
    &-input {
      &-load-button {
        background-color: #10163a;
      }
    }
  }
}
</style>
