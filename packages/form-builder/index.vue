
<template>
  <div id="b-form-wrap">
    <form-layout
      :listObj="formJson"
      :config="formConfig"
    />
  </div>
</template>

<script>
import FormLayout from './FormLaout'

export default {
  name: 'YlFormBuild',
  components: { FormLayout },
  props: {
    formJson: {
      type: Object,
      required: true
    }
  },
  computed: {
    formConfig() {
      return this.formJson.config;
    }
  }
}
</script>