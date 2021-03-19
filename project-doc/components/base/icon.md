# Icon 图标组件
::: tip 提示
> 本组件使用的是自制图标字体库，有关所有可用图标，请访问 [YL-ICONS](https://libra-lei.github.io/yl-icons/demo.html)。
:::

## 基础用法
::: demo 示例
```html
<template>
  <div>
    <ul class="icon-list">
      <li
        v-for="(icon, index) in icons"
        :key="index"
      >
        <yl-icon
          size="32px"
          :icon="icon"
        />
        <p>{{ icon }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'check_order',
        'running_order',
        'sign_order',
        'start_order',
        'summary_order',
        'verify_order',
        'complete_order',
        'finish_order',
        'control_system',
        'power_management',
        'power_station',
        'pv_monitor',
        'pv',
        'turbine_monitor',
        'weather_station',
        'wind_farm'
      ]
    }
  }
}
</script>


<style>
.icon-list {
  display: flex;
  flex-flow: wrap;
}

.icon-list li{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
}

.icon-list li p {
  font-size: 14px;
  font-weight: 800;
  margin-top: 4px;
}
</style>
```
:::

## Attribute
| 参数  | 类型   | 说明                        | 可选值 | 默认值 |
| :--- | :---   | :---                       | :--- | :--- |
| icon | string | 图标                     | 例如：check_order | -- |
| size | string | 图标大小                  | rgb(255, 222, 222) / red / #333333 | -- |