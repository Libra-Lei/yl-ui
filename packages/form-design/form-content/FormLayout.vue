
<template>
  <div class="form-conent">
    <draggable
      class="drag-wrap"
      tag="ul"
      group="form-draggable"
      v-model="formList"
      :animation="660"
      :sort="true"
      @add="handleAddItem($event, formList)"
      @start="handleStartItem($event, formList)"
    >
      <!-- 布局 start -->
      <div
        class="drag-box"
        v-for="formItem in formList"
        :key="formItem.key"
      >
        <div
          class="form-item-wrap"
          :class="{'active': currEditItem.key === formItem.key, 'grid': formItem.type === 'grid'}"
          @click.stop="handleClickItem(formItem)"
          >
          <!-- 删除按钮 -->
          <vs-icon
            class="trash-btn"
            icon="delete"
            @click="handleDelete(formItem.key)"
          />

          <!-- 栅格布局 -->
          <template v-if="formItem.type === 'grid'">
            <vs-row>
              <vs-col
                v-for="(col, index) in formItem.columns"
                :key="index"
                :vs-w="col.span"
              >
                <form-layout
                  class="grid-drag-wrap"
                  :listObj="col"
                  :config="config"
                  :currEditItem="currEditItem"
                  @updata-form-list="handleUpdateFormList"
                  @change-curr-edit-item="handleChangeCurrEditItem"
                  @delete-node="handleDeleteNode"
                  />
              </vs-col>
            </vs-row>
          </template>

          <!-- 普通布局， 宽度100% -->
          <template
            v-else
          >
            <form-node
              :formItem="formItem"
              :formLayout="config"
            />
          </template>
        </div>
      </div>
      <!-- 布局 end -->

    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import FormNode from './FormNode'

export default {
  name: 'FormLayout',
  components: { draggable, FormNode },
  props: {
    listObj: { // 表单项目对象， 必须包含list中 { list: [], ... }
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    currEditItem: { // 当前正在编辑的组件
      type: Object,
      required: true
    }
  },
  computed: {
    formList: { // 表单项集合
      get: function () {
        return this.listObj.list;
      },
      set: function (v) {
        // deep clone
        const list = JSON.parse(JSON.stringify(v));
        this.$emit('updata-form-list', list, this.listObj.key);
      }
    }
  },
  methods: {
    handleAddItem(e, list) {
      // 更新当前正在编辑的组件
      this.$emit('change-curr-edit-item', list[e.newIndex]);
    },
    handleStartItem(e, list) {
      // 更新当前正在编辑的组件
      this.$emit('change-curr-edit-item', list[e.oldIndex]);
    },
    handleClickItem(item) {
      this.$emit('change-curr-edit-item', item);
    },
    // 删除组件
    handleDelete(key) {
      this.$emit('delete-node', key);
    },

    handleUpdateFormList(list, key) {
      if (!key) return;
      // TODO: 目前只考虑了，栅格布局（columns）
      for (let i = 0; i < this.formList.length; i++) {
        if (!this.formList[i].columns) continue;
        const index = this.formList[i].columns.findIndex(x => x.key === key);
        if (index >= 0) {
          this.formList[i].columns[index].list = list;
          return;
        }
      }
    },
    handleChangeCurrEditItem(item) {
      this.$emit('change-curr-edit-item', item);
    },
    handleDeleteNode(key) {
      this.$emit('delete-node', key);
    }
  }
}
</script>
