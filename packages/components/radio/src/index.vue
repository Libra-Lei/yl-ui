<template>
  <div
    class="yl-radio"
    :class="{'yl--checked': checked}"
    @click="$refs.radioInput.click()">
    <input ref="radioInput" type="radio" :name="ylName" :value="valueStr" :checked="checked" @change="handleChange">
    <span class="yl-radio-container">
      <span
        class="yl-radio-container--borde"
        :style="{'border-color': `rgba(${color},1)`, 'background': bgColorShow}"></span>
      <span
        class="yl-radio-container--circle"
        :style="{'box-shadow': shadowColorShow}"></span>
    </span>

    <h2 class="yl-radio-label">{{ ylLabel }}</h2>
  </div>
</template>

<script>
export default {
  name: 'YlRadio',
  data() {
    return {}
  },
  model: {
    prop: 'isChecked',
    event: 'change'
  },
  props: {
    isChecked: {
      type: [String, Object, Number]
    },
    ylValue: {
      type: [String, Object, Number]
    },
    ylLabel: {
      type: String,
      default: ''
    },
    ylName: {
      type: String,
      default: 'lyradio'
    },
    // 目前仅支持 rgb 三个色值的字符串
    color: {
      type: String,
      default: '115,103,240'
    }
  },
  computed: {
    valueStr() {
      return this.filterValue(this.ylValue);
    },
    checked() {
      return this.filterValue(this.isChecked) === this.valueStr;
    },
    bgColorShow() {
      if (this.checked) {
        return `rgba(${this.color}, 1)`;
      } else {
        return '';
      }
    },
    shadowColorShow() {
      if (this.checked) {
        return `0 3px 12px 0 rgba(${this.color},.4)`;
      } else {
        return '';
      }
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('change', JSON.parse(e.target.value));
    },
    filterValue(v) {
      if (typeof(v) === 'number') {
        return `${v}`;
      } else {
        return JSON.stringify(v);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.yl-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  input {
    position: absolute;
    left: 0;
    opacity: 0;
    width: 20px;
  }
  &-label {
    font-size: 14px;
    margin-left: 4px;
  }
  .yl-radio-container {
    width: 18px;
    height: 18px;
    position: relative;
    display: block;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    &--borde {
      border: 2px solid rgb(200, 200, 200);
      border-radius: 50%;
      background: transparent;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    &--circle {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      transition: all .25s ease;
      top: 0;
    }
  }
}
</style>