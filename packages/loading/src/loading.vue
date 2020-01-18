<template>
  <div :style="boxStyleResult" :class="boxClass">
    <div :class="iconKeyResult" :style="iconStyleResult"></div>
    <div :style="fontStyleResult">
      <slot>加载中</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcLoading',
  props: {
    iconKey: {type: String, default: '16'},
    iconClass: {type: String, default: ''},
    iconStyle: {type: Object, default: null},
    boxStyle: {type: Object, default: null},
    boxClass: {type: String, default: ''},
    fontStyle: {type: Object, default: null}
  },
  data: () => ({
    defaultBox: {
      textAlign: 'center',
      fontSize: '30px',
      color: '#d60b52'
    },
    defaultFont: {
      fontSize: '13px'
    }
  }),
  computed: {
    boxStyleResult: function() {
      return Object.assign(this.defaultBox, this.boxStyle)
    },
    iconKeyResult: function() {
      return 'loader-' + this.iconKey + ' ' + this.iconClass
    },
    iconStyleResult: function() {
      return this.iconStyle
    },
    fontStyleResult: function() {
      return Object.assign(this.defaultFont, this.fontStyle)
    }
  },
  methods: {
  }
}
</script>