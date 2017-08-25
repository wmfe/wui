# Carousel 轮播组件 

### 项目源码地址

npm地址 https://www.npmjs.com/package/vue-m-carousel

git地址 https://github.com/shiye515/vue-m-carousel

### 基本用法

把想要渲染的dom直接放入carousel标签内即可
通过responsive设置宽高比例
auto属性设置是否自动轮播
indicators设置是否加入屏点, 可以自己设置class覆盖默认样式

```html
  <carousel :auto="3000" :responsive="40" :indicators="true">
      <div :style="{backgroundColor: 'red', width: '300px', height: '120px'}" >
      </div>
      <div :style="{backgroundColor: 'yellow', width: '300px', height: '120px'}">
      </div>
      <div :style="{backgroundColor: 'grey', width: '300px', height: '120px'}" >
      </div>
      <div :style="{backgroundColor: 'blue', width: '300px', height: '120px'}">
      </div>
  </carousel>
```

<template>
  <div :style="{width: '300px', height: '120px'}">
    <carousel :auto="3000" :responsive="40" :indicators="true">
      <div :style="{backgroundColor: 'red', width: '300px', height: '120px'}" >
        1
      </div><div :style="{backgroundColor: 'yellow', width: '300px', height: '120px'}">
        2
      </div><div :style="{backgroundColor: 'grey', width: '300px', height: '120px'}" >
        3
      </div><div :style="{backgroundColor: 'blue', width: '300px', height: '120px'}">
        4
      </div>
    </carousel>
  </div>
</template>


### 属性介绍 Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| loop     | 是否循环播放   | Boolean  |            |    true     |
| auto     | 是否自动播放，0不自动播放，其他值则自动播放，值为其自动播放的interval   | Number    |    |     3000    |
| indicators     | 是否添加屏点，不带任何样式，样式可参考demo写   | Boolean    |    |     false    |
| responsive     | 是否开启响应式高度，若为0则不开启，其他正整数表示 高度是宽度的百分之多少   | Number    |    |     40    |
| flickThreshold     | 轻弹的最小速度   | Number    |    |     0.6    |
| delta     | 滚动时触发滚动到下一张的最小值   | Number    |    |     100    |
| onSlidEnd     | 轮播切换完成时的回调   | Function    |    |     —   |
| preventDefault     | 取消touchmove事件的默认动作   | Boolean    |    |     false    |


<script>
import carousel from 'package/carousel/src/Carousel.js'

export default {
  components: {
    carousel
  }
}
</script>


