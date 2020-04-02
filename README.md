# A lightweight swiper component based on Vue

## Install

> npm install good-swiper --save-dev

## Usage

```javascript
// main.js
import Vue from 'vue'
import { Swiper, SwiperItem } from 'vue-swiper'

Vue.component(Swiper.name, Swiper)
Vue.component(SwiperItem.name, SwiperItem)
```

```HTML
<!-- App.vue -->
<template>
  <div>
    <!-- 轮播图容器组件 -->
    <swiper>
      <!-- 单个轮播图组件 -->
      <swiper-item>
        <img src="src" />
      </swiper-item>
    </swiper>

    <!-- 支持列表渲染 -->
    <swiper>
      <swiper-item v-for="item in list" :key="item">
        <img :src="item" />
      </swiper-item>
    </swiper>

  </div>
</template>
```


## Swiper Props

|   Prop    |  Type   |                Description                 | Default |
| :-------: | :-----: | :----------------------------------------: | :-----: |
| interval  | Number  |             轮播图切换时间间隔             | 3000ms  |
| duration  | Number  |          切换一个轮播图的过渡时间          |  300ms  |
| autoplay  | Boolean |                是否自动播放                |  false  |
|  trigger  | String  | 指示器触发方式（可选值为 click \| hover）  |  click  |
| direction | String  | 轮播图默认滚动方向(可选值为:left \| right) |  left   |


## Swiper Methods

| Name  | Description | ReturnValue |
| :---: | :---------: | :---------: |
| play  | 播放轮播图  |  undefined  |
| pause | 暂停轮播图  |  undefined  |
