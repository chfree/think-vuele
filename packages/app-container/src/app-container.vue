<template>
  <div class="app-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcAppContainer',
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
.app-container {
  padding: 0px 3px 3px 3px;
}
</style>
