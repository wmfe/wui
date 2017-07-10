import Toast from './src/Toast.vue'

const ToastIndex = {
  install (Vue) {
    function createToast (content, duration, style) {
      const div = document.createElement('div')
      document.body.appendChild(div)
      let msg = new Vue({
        el: div,
        data: {},
        components: { Toast },
        render (h) {
          return (
            <div>
              <toast content={content} duration={duration} styleSheet={style} />
            </div>
          )
        }
      })
      setTimeout(() => {
        msg = null
      }, duration + 2200)
    }

    Vue.prototype.$toast = (content, duration, style) => {
      createToast(content || '', duration || 2000, style)
    }
  }
}

export default ToastIndex
