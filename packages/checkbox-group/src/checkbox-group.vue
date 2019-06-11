<template>
  <el-checkbox-group :value="value" :vname="vname" class="tc-checkbox-group" v-bind="$attrs" v-on="$listeners">
    <el-checkbox-button v-for="item in providers" :key="item.id" :label="item.value" class="tc-checkbox-button">{{item.text}}</el-checkbox-button>
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcCheckboxGroup',
  mixins: [vnameMixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: String | Array, required: false, default: '' }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
