<template>
  <div ref="el" :class="['lazy-image', classVal, { bordered }]">
    <div class="lazy-image-placeholder"></div>
    <div class="lazy-image-content" :style="styleVal"></div>
  </div>
</template>

<script>
// export default {
//   name: 'wm-lazyimage'
// }
const concurrency = 6      // 最多同时加载的图片数量

let loaded = {}
const pendingQueue = []
setTimeout(() => {
  // 在发生拖动事件以及每秒钟，都会进行可见图片计算
  let debounceTimeout
  const debouncedCalcShouldLoad = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }
    debounceTimeout = setTimeout(() => {
      debounceTimeout = null
      calcShouldLoad()
    }, 100)
  }
  window.addEventListener('scroll', debouncedCalcShouldLoad)
  setInterval(debouncedCalcShouldLoad, 1000)

  // 计算可见区域内未加载的图片
  let shouldLoadQueue = []
  function calcShouldLoad () {
    const winHeight = window.innerHeight
    const minY = 0
    const maxY = winHeight * 2
    const shouldLoads = []
    pendingQueue.forEach(item => {
      const rc = item.rect()
      if (rc.bottom > minY && rc.top < maxY) {
        shouldLoads.push([item, rc.top * 2000 + rc.left])
      }
    })
    shouldLoads.sort((a, b) => b[1] - a[1])
    shouldLoadQueue = shouldLoads.map(v => v[0])
  }

  let loadingCount = 0
  // 优先加载视野范围内的图片，同时加载concurrency数量个图片
  setInterval(() => {
    if (loadingCount < concurrency && shouldLoadQueue.length > 0) {
      loadingCount++
      shouldLoadQueue.pop().load(() => {
        loadingCount--
      })
    }
  }, 30)

  // 视野内图片都加载完的时候，缓慢加载其他图片
  setInterval(() => {
    if (loadingCount === 0 && pendingQueue.length > 0) {
      loadingCount++
      for (let i = 0; i < pendingQueue.length; i++) {
        if (pendingQueue[i].rect().height > 0) {
          pendingQueue[i].load(() => {
            loadingCount--
          })
          return
        }
      }
    }
  }, 1000)
}, 100)

export default {
  name: 'wm-lazyimage',
  props: {
    src: {
      type: String,
      default: ''
    },
    bordered: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      styleVal: {},
      classVal: '',
      loaded: false
    }
  },
  watch: {
    src (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.styleVal = {}
        this.classVal = ''
        this.loaded = false
        if (loaded[newVal]) {
          this.loadImmediate()
        } else {
          pendingQueue.push(this)
        }
      }
    }
  },
  methods: {
    rect () {
      return this.$refs.el.getBoundingClientRect()
    },
    // 加载图片，并在加载成功后渐变展示，回调通知
    load (done) {
      this.loaded = true
      const pos = pendingQueue.indexOf(this)
      pos > -1 && pendingQueue.splice(pos, 1)

      const loader = new Image()
      loader.onload = () => {
        loaded[this.src] = true
        this.classVal = ['lazy-image-fade-in-pre']
        setTimeout(() => {
          this.classVal = ['lazy-image-fade-in']
        }, 10)
        setTimeout(() => {
          this.classVal = []
        }, 300)
        this.styleVal = {
          backgroundImage: `url(${this.src})`
        }
        done()
      }
      loader.onerror = () => {
        done()
      }
      loader.src = this.src
    },
    loadImmediate () {
      this.styleVal = {
        backgroundImage: `url(${this.src})`
      }
      this.classVal = ['lazy-image-fade-in']
    }
  },
  mounted () {
    if (loaded[this.src]) {
      this.loadImmediate()
    } else {
      pendingQueue.push(this)
    }
  },
  destroyed () {
    if (!this.loaded) {
      const pos = pendingQueue.indexOf(this)
      pos > -1 && pendingQueue.splice(pos, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.lazy-image {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  &-placeholder, &-content {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: url(../../assets/default.svg) center center no-repeat;
    background-size: cover;
    position: absolute;
  }
  &-fade-in-pre &-content {
    opacity: 0;
  }
  &-fade-in &-content {
    opacity: 1;
    transition: opacity 0.6s;
  }
  &.bordered {
    &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      border: 1px solid #D8D4D4;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      [data-dpr="1"] & {
        border-color: #D8D4D4 * 0.4 + #FFFFFF * 0.6;
      }
      [data-dpr="2"] & {
        border-color: #D8D4D4 * 0.6 + #FFFFFF * 0.4;
      }
      [data-dpr="3"] & {
        border-color: #D8D4D4 * 0.8 + #FFFFFF * 0.2;
      }
    }
  }
}
</style>
  
  
