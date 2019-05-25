<template>
  <div class="tc-xg-player">
    <Xgplayer v-bind="$attrs" v-on="$listeners"/>
  </div>
</template>

<script>
import Xgplayer from 'xgplayer-vue'
export default {
  name: 'TcXgPlayer',
  components: {
    Xgplayer
  },
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
