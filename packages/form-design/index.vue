
<template>
  <div id="d-form-wrap">
    <aside class="components-wrap">
      <components-list
        :baseList="baseComponents"
        :layoutList="layoutComponents"
      />
    </aside>
    <section class="form-wrap">
      <!-- 操作栏 -->
      <navbar
        :formJson="formJson"
        @clear="handleClear"
        @save="handleSave"
      />
      <!-- 表单主体 -->
      <form-layout
        :listObj="formJson"
        :config="formJson.config"
        :currEditItem="currEditItem"
        @updata-form-list="handleUpdateFormList"
        @change-curr-edit-item="handleChangeCurrEditItem"
        @delete-node="handleDeleteNode"
      />
    </section>
    <aside class="property-wrap">
      <component-property
        :formItem="currEditItem"
      />
    </aside>
  </div>
</template>

<script>
import baseConfig from './config'
import FormLayout from './form-content/FormLayout'

import ComponentsList from './components-list/Index'
import Navbar from './form-content/Navbar'
import ComponentProperty from './component-property/Index'

import { updateNode, deleteNode } from '../utils/index'

export default {
  name: 'YlFormDesign',
  components: {
    FormLayout,
    ComponentsList,
    Navbar,
    ComponentProperty
  },
  data() {
    return {
      baseComponents: baseConfig.baseList, // 基础组件
      layoutComponents: baseConfig.layoutList, // 布局组件

      formJson: { // 表单 json
        config: {
          labelPosition: 'top' // top: 上下布局  left: 左右布局
        },
        list: []
      },

      currEditItem: { key: null } // 当前正在编辑的表单项（激活状态，编辑属性）
    }
  },
  watch: {
    currEditItem: {
      deep: true,
      handler(nv) {
        if (!nv.key) return;
        // // 查找节点, 显式更新节点
        const org = JSON.parse(JSON.stringify(this.formJson));
        this.formJson = updateNode(org, nv);
      }
    }
  },
  methods: {
    // 更新表单json, 表单项 list
    handleUpdateFormList(list) {
      this.formJson.list = list;
    },
    // 更新当前正在编辑的组件
    handleChangeCurrEditItem(item) {
      this.currEditItem = JSON.parse(JSON.stringify(item));
    },
    // 删除节点
    handleDeleteNode(key) {
      const org = JSON.parse(JSON.stringify(this.formJson));
      this.formJson = deleteNode(org, key);
    },
    
    // 操作====================
    // 清空当前的表单项
    handleClear() {
      this.formJson.list = [];
      // 同时清除当前的编辑项
      this.currEditItem = { key: null };
    },
    // 保存
    handleSave() {
      this.$emit('save', JSON.parse(JSON.stringify(this.formJson)));
    }

  }
}
</script>