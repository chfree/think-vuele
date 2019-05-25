<template>
  <div>
    <el-select :value="value" v-bind="$attrs" v-on="$listeners" @change="selectChange">
      <el-option v-for="item in providers" :key="item.id" :label="item.text" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'TcSelect',
  props: {
    providers: { type: Array, default: null },
    value: { type: Object | String | Number, default: null }

  },
  data: () => ({
  }),
  methods: {
    selectChange: function(val) {
      this.$emit('input', val)
    }
  }
}
</script>
