<template>
  <div>
    <div
      class="form-item-wrap"
      v-for="(item, index) in formList"
      :key="index"
      >
      <!-- 栅格布局 -->
      <template v-if="item.type === 'grid'">
        <vs-row>
          <vs-col
            v-for="(col, index) in item.columns"
            :key="index"
            :vs-w="col.span"
          >
            <form-layout
              :listObj="col"
              :config="config"
              />
          </vs-col>
        </vs-row>
      </template>

      <!-- 普通布局， 宽度100% -->
      <template
        v-else
      >
        <form-node
          :formItem="item"
          :formLayout="config"
        />
      </template>
    </div>
  </div>
</template>

<script>
import FormNode from './FormNode'

export default {
  name: 'FormLayout',
  components: { FormNode },
  props: {
    listObj: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    formList() {
      return this.listObj.list;
    }
  }
}
</script>