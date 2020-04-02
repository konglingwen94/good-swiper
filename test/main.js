import Vue from 'vue'
import {Swiper,SwiperItem} from '../lib/good-swiper.umd.min.js'
// import {Swiper,SwiperItem} from '../src/main.js'
import App from './main.vue'

Vue.component(Swiper.name, Swiper)
Vue.component(SwiperItem.name, SwiperItem)

new Vue({
  el: '#app',
  render(h) {
    return h(App)
  },
})
