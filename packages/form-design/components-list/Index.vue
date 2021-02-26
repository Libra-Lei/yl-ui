
<template>
  <div class="components-list">
    <!-- title -->
    <div class="title">
      <h1>表单项选择</h1>
    </div>

    <!-- 基础控件 -->
    <vs-divider>基础控件</vs-divider>
    <draggable
      class="drag-wrap"
      tag="ul"
      :group="{ name: 'form-draggable', pull: 'clone', put: false }"
      :value="baseList"
      :animation="660"
      :sort="false"
      @start="handleStart($event, baseList)"
    >
      <li
        class="drag-wrap-btn"
        v-for="item in baseList"
        :key="item.type"
      >
        <vs-icon :icon="item.icon" style="margin-right: 2px;"></vs-icon>
        {{ item.label }}
      </li>
    </draggable>

    <!-- 布局控件 -->
    <vs-divider>布局控件</vs-divider>
    <draggable
      class="drag-wrap"
      tag="ul"
      :group="{ name: 'form-draggable', pull: 'clone', put: false }"
      :value="layoutList"
      :animation="660"
      :sort="false"
      @start="handleStart($event, layoutList)"
    >
      <li
        class="drag-wrap-btn"
        v-for="item in layoutList"
        :key="item.type"
      >
        <vs-icon :icon="item.icon" style="margin-right: 2px;"></vs-icon>
        {{ item.label }}
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'ComponentsList',
  components: { draggable },
  props: {
    baseList: {
      type: Array,
      required: true
    },
    layoutList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleStart(e, list) {
      // TODO: 当前是通过引用类型，隐式的改变了 list, 后续需要优化为 显示 改变
      // 给当前拖动的组件设置主键，后续在表单json中使用
      const curr = list[e.oldIndex];
      if (curr.type === 'grid') {
        // 栅格布局，给每列 加唯一标识
        list[e.oldIndex].columns = curr.columns.map(col => {
          return {
            key: uuidv4(),
            span: col.span,
            list: col.list
          }
        });
      }
      list[e.oldIndex].key = uuidv4();
    }
  }
}
</script>