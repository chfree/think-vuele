<template>
  <el-radio-group :value="value" :vname="vname" class="tc-radio-group" v-bind="$attrs" v-on="$listeners">
    <el-radio-button v-for="item in providers" :key="item.id" :label="item.value" class="tc-radio-button">{{item.text}}</el-radio-button>
    <slot></slot>
  </el-radio-group>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcRadioGroup',
  mixins: [vnameMixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: String, required: false, default: false }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>