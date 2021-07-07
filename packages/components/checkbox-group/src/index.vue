<!--
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-07-07 14:22:49
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 15:02:44
-->

<template>
  <div>
    <ul class="yl-checkbox-group" :class="direction">
      <li class="item">
        <vs-checkbox :vs-name="ylName" v-model="selectAll">全选</vs-checkbox>
      </li>
      <li
        class="item"
        v-for="item in list"
        :key="item.value"
      >
        <vs-checkbox :vs-value="item | toString" :vs-name="ylName" v-model="select">{{ item.label }}</vs-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YlCheckGroup',
  model: {
    prop: 'defaultValue',
    event: 'change'
  },
  props: {
    list: { // 勾选项 { label: '': value: '' }
      type: Array,
      required: true
    },
    ylName: {
      type: String,
      default: 'checkbox'
    },
    defaultValue: {
      type: Array
    },
    direction: {
      type: String,
      default: 'horizontal' // 水平：horizontal 垂直：vertical
    }
  },
  computed: {
    select: {
      get: function() {
        return this.defaultValue.map(x => JSON.stringify(x));
      },
      set: function(v) {
        this.$emit('change', v.map(x => JSON.parse(x)));
      }
    },
    selectAll: {
      get: function() {
        for (let index = 0; index < this.list.length; index++) {
          const item = this.list[index];
          const find = this.select.findIndex(x => x === JSON.stringify(item));
          if (find < 0) {
            return false;
          }
        }
        return true;
      },
      set: function(v) {
        if (v) {
          this.$emit('change', JSON.parse(JSON.stringify(this.list)));
        } else {
          this.select = [];
        }
      }
    }
  },
  filters: {
    toString(v) {
      return JSON.stringify(v);
    }
  }
}
</script>

<style lang="less" scoped>
.yl-checkbox-group {
  &.horizontal {
    display: flex;
  }
  &.vertical {
    display: block;
  }
  .item {
    padding: 10px 12px;
  }
}
</style>