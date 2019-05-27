<template>
  <fieldset v-bind="$attrs" class="tc-fieldset">
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
