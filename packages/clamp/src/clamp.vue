<template>
  <el-tooltip :disabled="!isTipAndTitle" :placement="placement">
    <div slot="content" :style="tipStyle">
      {{title}}
    </div>
    <clamp ref="clamp" :ellipsis="ellipsis" :expanded.sync="localExpanded" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
      <template v-if="isExpand" slot-scope="{ expand, collapse, toggle, clamped, expanded }" slot="after">
        <slot :expand="expand" :collapse="collapse" :toggle="toggle" :clamped="clamped", :expanded="expanded" name="after">
          <tc-button v-if="expanded" type="text" @click="doClamp">收起</tc-button>
          <tc-button v-else type="text" @click="doExpand">展开</tc-button>
        </slot>
      </template>
    </clamp>
  </el-tooltip>
</template>

<script>
import clamp from './Clamp'
export default {
  name: 'TcClamp',
  componentName: 'TcClamp',
  components: {clamp},
  props: {
    useMode: {type: String, default: 'tip', validator: function(value) {
      return ['tip', 'expand'].indexOf(value) !== -1
    }},
    ellipsis: {type: String, default: '…'},
    placement: {type: String, default: 'top'},
    autoTip: {type: Boolean, default: false},
    tipWidth: {type: Number, default: 300},
    expanded: {type: Boolean, default: false}
  },
  data() {
    return {
      localExpanded: !!this.expanded
    }
  },
  watch: {
    expanded(val) {
      this.localExpanded = val
    },
    localExpanded(val) {
      if (this.expanded !== val) {
        this.$emit('update:expanded', val)
      }
    }
  },
  computed: {
    isExpand() {
      return this.useMode === 'expand'
    },
    isTipAndTitle() {
      return this.useMode === 'tip' && this.autoTip
    },
    title() {
      return this.isTipAndTitle ? this.getText() : ''
    },
    tipStyle() {
      const style = {}
      style.width = this.tipWidth + 'px'
      return style
    }
  },
  methods: {
    getText() {
      // Look for the first non-empty text node
      let [content] = (this.$slots.default || []).filter(
        node => !node.tag && !node.isComment
      )
      return content ? content.text : ''
    },
    doExpand() {
      this.localExpanded = true
    },
    doClamp() {
      this.localExpanded = false
    }
  }
}
</script>

<style lang="scss">
.my-pp{
  width: 300px !important;
}
</style>