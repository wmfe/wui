import Message from './src/Message.vue'

const MessageIndex = {
  install (Vue) {
    function createMessage (title, content, cb, style) {
      const div = document.createElement('div')
      document.body.appendChild(div)
      let msg = new Vue({
        el: div,
        data: {},
        components: { Message },
        render (h) {
          return (
            <div>
              <message title={title} content={content} cb={cb} styleSheet={style} />
            </div>
          )
        }
      })
    }

    Vue.prototype.$message = (title, content, cb, style) => {
      createMessage(title || '', content || '', cb || (() => {}), style)
    }
  }
}

export default MessageIndex
