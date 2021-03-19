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

<style scoped>
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
