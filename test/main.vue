<template>
  <div>
    swiper
    <Swiper
      trigger="hover"
      autoplay
      direction="right"
      :duration="500"
      height="200px"
      :interval="2000"
    >
      <swiper-item v-for="item in list" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  // el: '#app'
  data() {
    return {
      list: [
        'https://t10.baidu.com/it/u=22980423,2454538972&fm=76',
        'https://t11.baidu.com/it/u=1926029254,2053310840&fm=76',
        'https://dgss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=287036479,2233760786&fm=173&app=49&f=JPEG?w=312&h=208&s=54991DD70EEA3C94CDBD9CA70300A001'
      ]
    }
  }
}
</script>

