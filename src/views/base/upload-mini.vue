<template>
  <div>
    <yl-upload-mini v-model="files" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: []
    }
  }
}
</script>