<template>
  <div @mouseenter="mouseEnter" @mouseleave="mouseLeave"  class="swiper" :style="swiperStyle">
    <div ref="wrapper" :style="wrapperStyle" class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-indicator">
      <swiper-indicator
        :trigger="trigger"
        @select="index=$event"
        :activeIndex="index"
        :count="swiperItemCount"
      ></swiper-indicator>
    </div>
    <transition name="arrow-fade">
      <div class="swiper-arrow" v-show="arrowOperationVisible">
        <span @click="index--" class="left arrow"></span>
        <span @click="index++" class="right arrow"></span>
      </div>
    </transition>
  </div>
</template>
<script>
import SwiperIndicator from './components/indicator.vue'
export default {
  name: 'Swiper',
  components: {
    SwiperIndicator
  },
  data() {
    return {
      arrowOperationVisible: false,
      index: 1,
      playing: true,
      containerWidth: 0,
      reversing: false,
      swiperItemCount: 0
    }
  },
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: 'hover',
      validator(value) {
        return ['hover', 'click'].includes(value)
      }
    },
    height: {
      type: String,
      default: '300px'
    },
    duration: {
      type: Number,
      default: 300
    },
    interval: {
      type: Number,
      default: 1700
    }
  },
  created() {
    this.$slots.default = this.$slots.default.filter(vnode => {
      return (
        vnode.componentOptions && vnode.componentOptions.tag === 'swiper-item'
      )
    })

    this.swiperItemCount = this.$slots.default.length
  },
  mounted() {
    const firstItem = this.$slots.default[0].elm
    const lastItem = this.$slots.default[this.$slots.default.length - 1].elm

    this.$refs.wrapper.appendChild(firstItem.cloneNode(true))
    this.$refs.wrapper.insertBefore(lastItem.cloneNode(true), firstItem)

    this.autoplay && this.play()
  },
  watch: {
    index(newIndex, oldIndex) {
      const endIndex = this.scrollItemCount - 1
      if (newIndex === endIndex && newIndex > oldIndex) {
        setTimeout(() => {
          this.reversing = true
          this.index = 1
          setTimeout(() => {
            this.reversing = false
          }, 100)
        }, this.duration)
      } else if (newIndex === 0 && newIndex < oldIndex) {
        setTimeout(() => {
          this.reversing = true
          this.index = endIndex - 1
          setTimeout(() => {
            this.reversing = false
          }, 100)
        }, this.duration)
      }
    },
    playing(playing) {
      playing ? this.play() : this.pause()
    }
  },
  computed: {
    swiperStyle() {
      return {
        height: this.height
      }
    },

    scrollItemCount() {
      return this.swiperItemCount + 2
    },
    wrapperStyle() {
      return {
        transform: `translate3d(${(-100 / this.scrollItemCount) *
          this.index}%,0,0)`,
        width: `${this.scrollItemCount * 100}%`,
        'transition-duration': this.reversing ? '0ms' : `${this.duration}ms`
      }
    }
  },

  methods: {
    mouseLeave(e) {
      console.log('mouseleave',e.target)
      this.arrowOperationVisible = false

      if (this.autoplay) {
        return
      }

      this.play()
    },
    mouseEnter(e) {
      console.log('mouseenter',e.target)

      this.pause()
      this.arrowOperationVisible = true
    },
    play() {
      this.timer = setInterval(() => {
        if (this.direction === 'left') {
          this.index++
        } else {
          this.index--
        }
      }, this.interval)
    },
    pause() {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped lang="less">
.swiper {
  overflow: hidden;
  width: 100%;
  position: relative;
}
.swiper-wrapper {
  display: flex;
  height: 100%;
  transition-property: transform;
}
.swiper-indicator {
  position: absolute;
  bottom: 30px;
  width: 100%;
}

.swiper-arrow {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translatey(-50%);
  padding: 0 20px;
  box-sizing: border-box;
  .arrow {
    transition :background-color .2s;
    &:before {
      content: '';
      display: inline-block;

      width: 20px;
      height: 20px;

      border: 1px solid;
      border-width: 1px 1px 0 0;
    }
    // display: inline-block;
    // background: red;

    &:hover {
      background: #ccc;
    }
    &.left {
      &:before {
        transform: rotate(225deg);
      }
      padding: 13px 2px 0px 11px;
    }
    &.right {
      &::before {
        transform: rotate(45deg);
      }
      padding: 14px 10px 10px 1px;
    }
  }
}
.arrow-fade-enter-active,
.arrow-fade-leave-active {
  transition: opacity 1s;
}
.arrow-fade-enter,
.arrow-fade-leave-to {
  opacity: 0;
}
</style>
