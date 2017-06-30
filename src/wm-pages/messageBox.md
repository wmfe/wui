## MessageBox 组件

### 基本用法

MessageBox组件挂在在Vue实例上，可以直接使用this.$message()调起
当然在使用之前需要执行 Vue.use(Message)

<template>
  <div :style="{textAlign: 'left'}">
    <button @click="basic">基本用法</button>
  </div>
</template>


```html
<div :style="{textAlign: 'left'}">
  <button @click="basic">基本用法</button>
</div>

methods: {
  basic () {
    this.$message('title', 'content')
  }
}
```

### 使用示例

<template>
  <div :style="{textAlign: 'left'}">
    <button @click="cb">增加回调函数</button>
  </div>
</template>


```html
<div :style="{textAlign: 'left'}">
  <button @click="cb">增加回调函数</button>
</div>

methods: {
  cb () {
    this.$message('提示', '点击确定后会在控制台输出内容~', () => { console.log('blabla') })
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
    this.$message('提示', '改变宽度', () => { console.log('blabla') }, {width: '40%'})
  }
}
```

### 参数介绍 Attributes:
name            |           type     |  default   |    description
--------------- | -------------:     | :--------: | :--------------------------------------------------------:
title             |   String | ''     |    主题
content          |         String     |  ''        |   提示内容
callback          |         func     |  () => {}        |   点击确定后的回调函数
style | Object | null | 自定义toast的样式

<script>
import Message from '@/wm-kit/packages/messageBox/Message.js'
import Vue from 'vue'

Vue.use(Message)

export default {
  methods: {
    ownStyle () {
      this.$message('提示', '改变宽度', () => { console.log('blabla') }, {width: '40%'})
    },
    cb () {
      this.$message('提示', '点击确定后会在控制台输出内容~', () => { console.log('blabla') })
    },
    basic () {
      this.$message('title', 'content')
    }
  },
  mounted () {
    this.$message('提示', '欢迎使用MessageBox')
  }
}
</script>
