
<template>
  <div class="navbar-wrap">
    <!-- 保存 -->
    <vs-tooltip text="保存" position="bottom">
      <vs-button radius size="small" color="primary" type="gradient" icon="save" @click="$emit('save')"></vs-button>
    </vs-tooltip>
    <!-- 预览 -->
    <vs-tooltip text="预览" position="bottom">
      <vs-button radius size="small" color="primary" type="gradient" icon="visibility" @click="handlePreview"></vs-button>
    </vs-tooltip>
    <!-- 生成json -->
    <vs-tooltip text="生成JSON" position="bottom">
      <vs-button radius size="small" color="primary" type="gradient" icon="upload_file" @click="handleBuildJson"></vs-button>
    </vs-tooltip>
    <!-- 清空 -->
    <vs-tooltip text="清空" position="bottom">
      <vs-button radius size="small" color="danger" type="gradient" icon="delete" @click="$emit('clear')"></vs-button>
    </vs-tooltip>

    <!-- json 预览 -->
    <vs-popup
      title="表单JSON"
      :active.sync="jsonActive"
      :buttons-hidden="true"
    >
      <codemirror style="height: 100%;" :value="jsonStr"/>
    </vs-popup>

    <!-- 表单 预览 -->
    <vs-popup
      fullscreen
      title="表单预览"
      :active.sync="formActive"
      :buttons-hidden="true"
    >
      <yl-form-build style="padding: 0 20px;" :formJson="formJson" />
    </vs-popup>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror-lite'
import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/vue/vue';

import YlFormBuild from '../../form-builder/index'

export default {
  name: 'Navbar',
  components: { codemirror, YlFormBuild },
  data() {
    return {
      jsonActive: false,
      jsonStr: '',

      formActive: false
    }
  },
  props: {
    formJson: {
      type: Object,
      required: true
    }
  },
  methods: {
    handlePreview() {
      this.formActive = true;
    },
    handleBuildJson() {
      this.jsonStr = JSON.stringify(this.formJson);
      this.jsonActive = true;
    }
  }
}
</script>
