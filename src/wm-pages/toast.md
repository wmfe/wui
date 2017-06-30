## Toast 组件

### 基本用法

Toast组件挂在在Vue实例上，可以直接使用this.$toast()调起toast效果
当然在使用之前需要执行 Vue.use(Toast)

<template>
  <div :style="{textAlign: 'left'}">
    <button @click="basic">点我试试</button>
  </div>
</template>


```html
<div :style="{textAlign: 'left'}">
  <button @click="basic">点我试试</button>
</div>

methods: {
  basic () {
    this.$toast('基本使用')
  }
}
```

### 使用示例

<template>
  <div :style="{textAlign: 'left'}">
    <button @click="duration">控制显示时间</button>
  </div>
</template>


```html
<div :style="{textAlign: 'left'}">
  <button @click="duration">控制显示时间</button>
</div>

methods: {
  duration () {
    this.$toast('显示5s', 5000)
  }
}
```

<template>
  <div :style="{textAlign: 'left'}">
    <button @click="ownStyle">自定义样式</button>
  </div>
</template>

```html
<div :style="{textAlign: 'left'}">
    <button @click="ownStyle">自定义样式</button>
  </div>

methods: {
  ownStyle () {
    this.$toast('红色的字', 2000, {color: 'red'})
  }
}
```

### 参数介绍 Attributes:
name            |           type     |  default   |    description
--------------- | -------------:     | :--------: | :--------------------------------------------------------:
content             |   String | ''     |    toast弹出的内容
duration          |         Number     |  2000ms        |   toast显示的时间
style | Object | null | 自定义toast的样式

<script>
import Toast from '@/wm-kit/packages/toast/Toast.js'
import Vue from 'vue'

Vue.use(Toast)

export default {
  methods: {
    ownStyle () {
      this.$toast('红色的字', 2000, {color: 'red'})
    },
    duration () {
      this.$toast('显示5s', 5000)
    },
    basic () {
      this.$toast('基本使用')
    }
  },
  mounted () {
    this.$toast('欢迎使用toast组件')
  }
}
</script>
