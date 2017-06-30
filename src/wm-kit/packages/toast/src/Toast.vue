<template>
  <transition name="fade">
    <div :style="styleSheet" class="toast-box" v-if="show">{{content}}</div>
  </transition>
</template>

<script>
export default {
  props: {
    content: String,
    duration: Number,
    styleSheet: Object
  },
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
    setTimeout(() => {
      this.show = false
    }, this.duration)
  }
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.toast-box {
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  top: 70%;
  width: 120px;
  text-align: center;
  background-color: #505050;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
}
</style>
