<template>
  <div>
    swiper
    <Swiper trigger="click"  autoplay  direction="right" :duration="500" height="200px" :interval="2000">
       <swiper-item v-for="item in 3" :key="item">{{item}}</swiper-item>
    </Swiper>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  // el: '#app'
}
</script>

