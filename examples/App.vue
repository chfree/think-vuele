<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <main-footer v-if="lang !== 'play' && !isComponent"></main-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    lang () {
      return 'zh-CN'
    },
    isComponent () {
      return /^component-/.test(this.$route.name || '')
    }
  }
}
</script>

<style>

</style>
