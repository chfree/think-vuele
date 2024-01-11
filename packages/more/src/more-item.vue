<template>
  <div class="el-collapse-item">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`el-collapse-content-${id}`"
      :aria-describedby ="`el-collapse-content-${id}`"
    >
      <div
        class="el-collapse-item__header"
        :id="`el-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
      >
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <el-collapse-transition>
      <div
        class="el-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`el-collapse-head-${id}`"
        :id="`el-collapse-content-${id}`"
      >
        <div class="el-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>
<script>
import Emitter from 'element-ui/src/mixins/emitter'
import { generateId } from 'element-ui/src/utils/util'

export default {
  name: 'MoreItem',
  componentName: 'MoreItem',
  mixins: [Emitter],
  data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false,
      id: generateId(),
      timeOutID: null
    };
  },

  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default() {
        return this._uid
      }
    },
    disabled: Boolean
  },

  computed: {
    isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1
    }
  },

  methods: {
    handleFocus() {
      this.timeOutID = setTimeout(() => {
        if (!this.isClick) {
          this.focusing = true
        } else {
          this.isClick = false
        }
      }, 50)
    },
    handleHeaderClick() {
      if (this.disabled) return
      this.dispatch('ElCollapse', 'item-click', this)
      this.focusing = false
      this.isClick = true
    },
    handleEnterClick() {
      this.dispatch('ElCollapse', 'item-click', this)
    }
  },

  beforeDestroy() {
    clearTimeout(this.timeOutID);
  }
}
</script>
