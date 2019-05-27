<template>
  <div>
    <hot-table class="tc-hot-table" licenseKey="non-commercial-and-evaluation" v-bind="$attrs" v-on="$listeners" 
    :height="height"
    :rowHeaders="rowHeaders" 
    :colHeaders="colHeaders" />
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import 'handsontable/dist/handsontable.full.css'
import './hot-table.css'
export default {
  components: {HotTable},
  name: 'TcHotTable',
  props: {
    height: { type: String | Number, default: 'auto' },
    rowHeaders: { type: Boolean | Array, default: true },
    colHeaders: { type: Boolean | Array, default: true }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
