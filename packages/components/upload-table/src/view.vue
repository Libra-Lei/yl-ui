
<template>
  <transition name="view-upload">
    <div
      ref="view"
      class="view-upload"
      @click="closeView">
      <img
        v-lazy="src"
        alt="image"
        >
    </div>
  </transition>
</template>
<script>
import utils from '../../../utils/view'
export default {
  name:'ViewUpload',
  props:{
    src:{
      default:null,
      type:String
    }
  },
  mounted(){
    utils.insertBody(this.$refs.view)
  },
  upload(){
    utils.insertBody(this.$refs.view)
  },
  methods:{
    closeView(){
      // if(evt.target.tagName != 'IMG'){
      //   this.$parent.viewActive = false
      // }
      this.$parent.viewActive = false;
    }
  }
}
</script>
