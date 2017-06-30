<template>
  <div>
    <div class="modal" v-if="show">
    </div>
    <transition name="fade">
      <div :style="styleSheet" class="msg-box" v-if="show">
        <div class="msg-header">
          <div class="msg-title">{{title}}</div>
        </div>
        <div class="msg-content">
          <div class="msg-message">{{content}}</div>
        </div>
        <div class="msg-btn">
          <div class="msg-ok" @click="handleOk">确定</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    duration: Number,
    styleSheet: Object,
    cb: Function
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleOk () {
      this.show = false
      if (Object.prototype.toString.call(this.cb) === '[object Function]') {
        this.cb()
      }
    }
  },
  mounted () {
    this.show = true
  }
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
  z-index: 2000;
}
.msg-box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  background-color: #fff;
  width: 55%;
  border-radius: 3px;
  font-size: 16px;
  z-index: 2001;
}
.msg-header {
  padding: 15px 0 0
}
.msg-title {
  text-align: center;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.msg-content {
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
  min-height: 36px;
  position: relative;
}
.msg-message {
  color: #999;
  margin: 0;
  text-align: center;
  line-height: 36px;
}
.msg-btn {
  height: 40px;
  line-height: 40px;
}
.msg-ok {
  color: #26a2ff;
  line-height: 35px;
  display: block;
  background-color: #fff;
  text-align: center;
}
</style>
