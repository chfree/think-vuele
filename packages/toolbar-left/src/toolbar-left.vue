<template>
  <div class="tc-toolbar-left">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcToolbarLeft',
  props: {
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
.tc-toolbar-container {
  .tc-toolbar-left {
    line-height: 32px;
  }
}
</style>
