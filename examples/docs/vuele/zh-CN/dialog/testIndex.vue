<template>
  <div style="background-color:#eee;">
    <h1>我是新的组件1</h1>
    <h1>我是新的组件2</h1>
    <h1>我是新的组件3</h1>
    <h1>我是新的组件4</h1>
    <h1>我是新的组件5</h1>
    <h1>我是新的组件6</h1>
    <h1>我是新的组件7</h1>
    <h1>我是新的组件8</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    beforeClose() {
      console.log('beforeClose')
    },
    opened(isFirstOpened) {
      console.log('opened', isFirstOpened)
    },
    closed() {
      console.log('closed')
    },
    open() {
      console.log('open')
    },
    close() {
      console.log('close')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>