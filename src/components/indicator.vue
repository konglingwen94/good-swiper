<template>
  <div class="indicator-container">
    <div
      :data-index="item"
      v-on="listeners"
      :class="{active:activeIndex===item}"
      class="indicator-item"
      v-for="(item ) in count"
      :key="item"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'swiper-indicator',
  props: {
    count: {
      type: Number,
      default: 0
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    trigger: String
  },
  computed: {
    listeners() {
      const self = this
      if (this.trigger === 'hover') {
        return {
          mouseenter(e) {
            // console.log(e.target.dataset)
            self.$emit('select', parseInt(e.target.dataset.index))
          }
        }
      } else if (this.trigger === 'click') {
        return {
          click(e) {
            self.$emit('select', parseInt(e.target.dataset.index))
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.indicator-container {
  position: relative;
  display: flex;
  justify-content: center;
  .indicator-item {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    border: 1px solid;
    cursor: pointer;
    &.active {
      background: red;
    }
    & + .indicator-item {
      margin-left: 9px;
    }
  }
}
</style>
