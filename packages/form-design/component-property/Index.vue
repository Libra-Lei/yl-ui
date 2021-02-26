
<template>
  <div class="property">
    <!-- title -->
    <div class="title">
      <h1>控件属性编辑</h1>
    </div>

    <!-- 表单区域 -->
    <div
      v-if="formItem.key"
      class="content"
    >
      <!-- 基础信息 -->
      <div
        class="base"
        v-show="baseShow"
      >
        <vs-divider>基础信息</vs-divider>
        <vs-input class="item" label="标签名称" placeholder="请输入标签名称" v-model="formItem.options.label"/>
        <vs-input class="item" label="输入提示信息" placeholder="请输入提示信息" v-model="formItem.options.placeholder"/>
        <vs-input class="item" label="数据字段" placeholder="请输入数据字段" v-model="formItem.field"/>
      </div>

      <div
        v-show="textShow"
      >
        <vs-input label="文字" placeholder="请输入" v-model="formItem.options.label"/>
      </div>

      <!-- 如果是 下拉、单选、多选， 则可编辑可选项 -->
      <div
        v-show="showOptions"
      >
        <vs-divider>可选项信息</vs-divider>
        <div
          v-if="formItem.options.options"
          class="item options"
        >
          <p class="title">选项数据</p>

          <div
            class="options-item"
            v-for="(item, index) in formItem.options.options"
            :key="index"
          >
            <vs-input class="options-item-item" placeholder="选项名称" v-model="item.label"/>
            <vs-input class="options-item-item" placeholder="选项值" v-model="item.value"/>
            <vs-button class="options-item-item" radius icon="delete" color="danger" size="small"></vs-button>
          </div>

          <vs-button color="primary" type="line">增加选项</vs-button>
        </div>
      </div>

      <!-- 表单项的操作属性 -->
      <div
        v-show="showOperate"
      >
        <vs-divider>操作属性</vs-divider>
        <div class="item operation">
          <vs-checkbox v-model="formItem.options.disabled">禁用</vs-checkbox>
          <vs-checkbox v-if="showMultiple" v-model="formItem.options.multiple">可多选</vs-checkbox>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentProperty',
  data() {
    return {}
  },
  props: {
    formItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    // 可选项编辑 显示
    showOptions() {
      const whites = ['select', 'radio', 'checkbox'];
      return whites.findIndex(x => x === this.formItem.type) >= 0;
    },
    // 操作属性控制显示
    showOperate() {
      const blacks = ['divider', 'grid'];
      return blacks.findIndex(x => x === this.formItem.type) < 0;
    },
    // 操作属性控制显示 --> 多选
    showMultiple() {
      return this.formItem.type === 'select';
    },
    // 基础信息
    baseShow() {
      const blacks = ['divider', 'grid', 'button'];
      return blacks.findIndex(x => x === this.formItem.type) < 0;
    },
    // 分割线、按钮，可修改文字
    textShow() {
      const whites = ['divider', 'button'];
      return whites.findIndex(x => x === this.formItem.type) >= 0;
    }
  }
}
</script>