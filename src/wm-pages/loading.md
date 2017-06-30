## loading 加载器

### 使用方法
```html
<template>
  <loading v-show="loading"></loading>
</template>
<script>
  import Loading from '@/wm-kit/packages/loading/src/Loading.vue'

  export default {
    components: {
      Loading
    }
  }

</script>
```

### 示例
<template>
  <loading v-show="loading"></loading>
  <button @click="toggleLoading">点我查看加载效果</button>
</template>

<script>
import Loading from '@/wm-kit/packages/loading/src/Loading.vue'

export default {
  data() {
    return {
      loading: false
    }
  },
  components: {
    Loading
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
      }, 1000)
    }
  }
}
</script>
