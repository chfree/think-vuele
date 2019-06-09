<template>
  <div>
    <el-select ref="elSelect" :vname="vname" :value="value" class="tc-select" v-bind="$attrs" v-on="$listeners" @change="selectChange">
      <el-option v-for="item in providers" :key="item.id" :label="item.text" :value="item.value" class="tc-option"></el-option>
    </el-select>
  </div>
</template>

<script>
import vnameMixin from 'main/mixins/vname-mixin.js'
export default {
  name: 'TcSelect',
  mixins: [vnameMixin],
  props: {
    providers: { type: Array, default: null },
    value: { type: Object | String | Number, default: null }
  },
  data: () => ({
  }),
  mounted() {
  },
  computed: {
  },
  methods: {
    selectChange: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>
