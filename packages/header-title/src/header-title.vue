<template>
  <div>
    <div class="tc-title-container">
      <svg-icon :icon-class="icon" />
      <span class="tc-title-span">
        <slot name="title">{{ title }}</slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcHeaderTitle',
  props: {
    icon: { type: String, required: false, default: null },
    title: { type: String, required: false, default: '标题' }
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .tc-title-container {
  padding: 5px 0px 10px 0px;
  .tc-title-span {
    color: #333;
    font-size: 16px;
    font-weight: 800;
  }
}
</style>
