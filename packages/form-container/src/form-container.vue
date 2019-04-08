<template>
  <div class="form-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TcFormContainer',
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
.fieldset{
  border: 1px solid #ddd;
}
.fieldset-legend{
  font-weight: 800;
}
</style>
