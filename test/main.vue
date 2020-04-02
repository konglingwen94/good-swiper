<template>
  <div>
     
    <Swiper
      trigger="hover"
      autoplay
      direction="right"
      :duration="500"
      height="200px"
      :interval="2000"
    >
      <swiper-item v-for="item in list" :key="item">
        <img width="100%" :src="item" alt />
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
        'http://t9.baidu.com/it/u=2268908537,2815455140&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1586431033&t=df8cf8db28ce18eb4bd87c514ed387f1',
        'http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1586431033&t=16f3494b0cb39b696b5ef2d076d97397',
        'http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1586431033&t=b79388e1b52551b520ef52a38d2dec08'
      ]
    }
  }
}
</script>

