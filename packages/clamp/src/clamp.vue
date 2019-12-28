<template>
  <el-tooltip :disabled="!autoTip" :placement="placement">
    <div slot="content" :style="tipStyle">
      {{title}}
    </div>
    <clamp ref="clamp" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
      <template slot-scope="{ expand, collapse, toggle, clamped, expanded }" slot="after">
        <slot :expand="expand" :collapse="collapse" :toggle="toggle" :clamped="clamped", :expanded="expanded" name="after">
          <span v-if="expanded">
            收起
          </span>
          <span v-else="expanded">
            展开
          </span>
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
    placement: {type: String, default: 'top'},
    autoTip: {type: Boolean, default: false},
    tipWidth: {type: Number, default: 300}
  },
  data() {
    return {
    }
  },
  computed: {
    title() {
      return this.autoTip ? this.getText() : ''
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
    }
  }
}
</script>

<style lang="scss">
.my-pp{
  width: 300px !important;
}
</style>