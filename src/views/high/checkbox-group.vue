<!--
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-07-07 14:25:18
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 15:03:25
-->
<template>
  <div>
    <yl-check-group
      :list="list"
      yl-name="ordertype"
      direction="horizontal"
      v-model="selected"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '巡检',
          value: 1
        },
        {
          label: '维护',
          value: 2
        },
        {
          label: '实验',
          value: 3
        },
        {
          label: '大小修',
          value: 4
        },
        {
          label: '培训',
          value: 5
        },
        {
          label: '其他',
          value: 6
        }
      ],
      selected: []
    }
  }
}
</script>

<style>

</style>
