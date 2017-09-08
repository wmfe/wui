<template>
  <div class="von-accordion">
    <slot></slot>
  </div>
</template>

<script>
import './accordion.less'
import channel from './channel'

export default {
  name: 'w-accordion',
  props: {
    defaultIndex: String,

    multi: {
      type: String,
      default: 'true',
      validator: function(v) {
        return v == 'true' || v == 'false'
      }
    }
  },

  computed: {
    activeIndex: function() {
      return parseInt(this.defaultIndex)
    }
  },

  created() {
    channel.$emit('activeIndexChanged', this.activeIndex)
  }
}
</script>