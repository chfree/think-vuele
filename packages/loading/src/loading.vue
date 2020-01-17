<template>
  <div :style="defaultBox">
    <div class="loader-16"></div>
    <div :style="defaultFont">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcLoading',
  props: {
  },
  data: () => ({
    defaultBox: {
      textAlign: 'center',
      fontSize: '30px',
      color: '#d60b52'
    },
    defaultFont: {
      fontSize: '13px'
    }
  }),
  computed: {
  },
  methods: {
  }
}
</script>