<template>
  <div :class="className">
    <div :class="`${className}__item`" />
  </div>
</template>

<script>
export default {
  name: 'TcSkeletonField',
  data() {
    return {
      className: 'skeleton-field'
    }
  },
  props: {
  }
}
</script>
