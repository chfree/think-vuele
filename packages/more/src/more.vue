<template>
  <div class="tc-more">
    <el-collapse v-bind="$attrs" v-on="$listeners">
      <more-item ref="moreItem">
        <template slot="title">
          <el-row style="width:100%">
            <el-col :span="12">
              <slot name="title">{{title}}</slot>
            </el-col>
            <el-col :span="12" style="text-align:right;">
              <slot name="tool"></slot>
              <i class="cursor-pointer" :class="iconArrow" @click="handItemClick" />
            </el-col>
          </el-row>
        </template>
        <slot></slot>
      </more-item>
    </el-collapse>
  </div>
</template>

<script>
import moreItem from './more-item'
export default {
  name: 'TcMore',
  componentName: 'TcMore',
  components: {moreItem},
  data() {
    return {
      isActive: false
    }
  },
  props: {
    title: String
  },
  computed: {
    iconArrow: function() {
      return this.isActive ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
    }
  },
  methods: {
    handItemClick: function() {
      this.$refs.moreItem.handleHeaderClick()
      this.isActive = !this.isActive
    }
  }
}
</script>
<style lang="scss">
.tc-more{
  .el-collapse-item__header{
    cursor: default;
  }
  .el-collapse-item__header.is-active {
    border-bottom: 1px solid #EBEEF5 !important;
  }
  .cursor-pointer {
    cursor: pointer;
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
}
</style>