<template>
  <div>
    <i
      :class="`yl-icons icon-${icon}`"
      :style="{'font-size': size, 'color': color}"
    >
      <slot />
    </i>
  </div>
</template>

<script>
export default {
  name: 'YlIcon',
  props: {
    icon: {
      type: String,
      default: 'check_order'
    },
    size: {
      type: String,
      default: '12px'
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>
