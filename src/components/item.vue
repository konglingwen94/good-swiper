<template>
  <div class="swiper-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'swiper-item',
  data(){
    return {
      flag:'swiper-item'
    }
  },
  created() {
    // this.$parent.swiperItemCount++
  }
}
</script>
<style scoped lang="less">
.swiper-item {
  border: 1px solid;
  height:100%;
  width: 33%;
  overflow:hidden;
}
</style>


