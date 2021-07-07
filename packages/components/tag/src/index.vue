<!--
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-07-07 15:59:51
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 16:18:20
-->
<template>
  <div class="yl-tag">
    <div
      v-if="text === ''"
      class="no-text"
      :class="[classColor]"
      :style="{'height': size, 'width': size, 'background-color': backgroundColor, 'border-radius': radius}"
      ></div>
    <div
      v-else
      class="text"
      :class="[classColor]"
      :style="{'color': textColor, 'background-color': backgroundColor, 'font-size': fontSize, 'border-radius': radius}"
      >
      <yl-icon class="tag-icon" v-if="icon !== ''" :icon="icon"></yl-icon>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
import YlIcon from '../../icon/src'

export default {
  name: 'YlTag',
  components: { YlIcon },
  data() {
    return {
      defaultColors: {
        'primary': 'rgba(var(--vs-primary), 1)',
        'success': 'rgba(var(--vs-success), 1)',
        'danger': 'rgba(var(--vs-danger), 1)',
        'warning': 'rgba(var(--vs-warning), 1)',
        'dark': 'rgba(var(--vs-dark), 1)',
        'blue': 'rgb(0, 131, 255)',

        'turbine1': 'rgb(38, 187, 174)',
        'turbine2': '#2ecc71',
        'turbine3': '#e74c3c',
        'turbine4': '#ff9f43',
        'turbine5': '#c28b6e',
        'turbine6': '#5c7996'
      }
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    icon: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '1rem'
    },
    color: {
      type: String,
      default: 'primary'
    },
    classColor: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '12px'
    },
    borderRadius: {
      type: String,
      default: ''
    }
  },
  computed: {
    backgroundColor() {
      return this.defaultColors[this.color] || this.color
    },
    radius() {
      return `${this.borderRadius}!important`
    }
  }
}
</script>

<style lang="less" scoped>
.yl-tag {
  .no-text {
    border-radius: 99%;
  }
  .text {
    border-radius: 20px;
    padding: 0 7px;
    display: flex;
    align-items: center;

    width: max-content;

    .tag-icon {
      margin-right: 4px;
    }
  }
}
</style>
