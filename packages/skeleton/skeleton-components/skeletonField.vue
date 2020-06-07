<template>
  <div :class="fieldClassName">
    <div :class="classNameResult" :style="styleResult" />
  </div>
</template>

<script>
export default {
  name: 'TcSkeletonField',
  data() {
    return {
      fieldClassName: 'skeleton-field',
      defaultStyle: {
      }
    }
  },
  props: {
    customStyle: {
      type: Object,
      default: () => {}
    },
    height: {
      type: Number,
      default: 22
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleResult: function() {
      let heightObj = { height: this.height + 'px' }
      return Object.assign({}, this.defaultStyle, this.customStyle, heightObj)
    },
    classNameResult: function() {
      return this.fieldClassName + '__item ' + this.className
    }
  }
}
</script>
