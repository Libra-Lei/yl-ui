
<template>
  <div class="radio">
    <ul>
      <li
        :class="{'mr-3': index < colorsRadio.length - 1}"
        v-for="(item, index) in colorsRadio"
        :key="`color-radio-${index}`"
      >
        <yl-radio
          :yl-value="item"
          :yl-label="item.label"
          :color="item.color"
          v-model="model"
        />
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      colorsRadio: [
        { color: '115,103,240', label: '蓝色' },
        { color: '255,159,67', label: '蓝色' },
        { color: '234,84,85', label: '蓝色' },
        { color: '40,199,111', label: '蓝色' },
        { color: '66,153,225', label: '蓝色' },
        { color: '56,178,172', label: '蓝色' },
        { color: '159,122,234', label: '蓝色' },
        { color: '237,100,166', label: '蓝色' }
      ],
      model: null
    }
  }
}
</script>

<style lang="less" scoped>
.radio {
  height: 100%;
  ul {
    display: flex;
    align-items: center;
  }
}
</style>
