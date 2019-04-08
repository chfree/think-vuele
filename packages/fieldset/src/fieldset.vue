<template>
  <fieldset v-bind="$attrs" class="fieldset">
    <legend class="fieldset-legend">{{ title }}</legend>
    <slot></slot>
  </fieldset>
</template>

<script>
export default {
  name: 'TcFieldset',
  props: {
    title: { type: String, required: false, default: '' }
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
.fieldset {
  border: 1px solid #ddd;
  margin: 5px;
  min-inline-size: auto !important;
}
.fieldset-legend {
  font-weight: 800;
}
</style>
