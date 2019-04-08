<template>
  <div>
    <el-button-group>
      <el-button v-for="item in providers" :key="item.id" :type="value===item.value?'primary':'default'" @click="itemClick(item.value)">
        {{ item.text }}
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'TcSwitchButton',
  props: {
    providers: { type: Array, required: false, default: null },
    value: { type: Object | Number | String, required: false, default: null }
  },
  data: () => ({
  }),
  methods: {
    itemClick: function (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
</style>
