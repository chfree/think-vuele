<template>
  <div>
    <hot-table licenseKey="non-commercial-and-evaluation" v-bind="$attrs" v-on="$listeners" 
    :height="height"
    :rowHeaders="rowHeaders" 
    :colHeaders="colHeaders" />
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import 'handsontable/dist/handsontable.full.css'
export default {
  components: {HotTable},
  name: 'TcHotTable',
  props: {
    height: { type: String | Number, default: 'auto' },
    rowHeaders: { type: Boolean, default: true },
    colHeaders: { type: Boolean, default: true }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
