<template>
  <div class="tc-toolbar-right">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcToolbarRight',
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
  .tc-toolbar-right {
    text-align: right;
  }
}
</style>
