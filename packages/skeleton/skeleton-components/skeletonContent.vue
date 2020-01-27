<template>
  <div :class="classObject">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TcSkeletonContent',
  computed: {
    classObject() {
      return {
        'skeleton': true,
        'skeleton-is-rounded': this.rounded,
        'skeleton-is-centered': this.centered,
        'skeleton-is-animated': this.animated
      }
    }
  },
  props: {
    rounded: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
</style>
