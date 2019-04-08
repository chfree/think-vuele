<template>
  <div>
    <div class="tc-fun-toolbar-button-container">
      <el-button-group>
        <el-button v-for="fb in funButtons" :key="fb.pkId" type="primary" size="small" icon="el-icon-edit" @click="funClick(fb.btnEv)">{{ fb.btnNm }}</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
import menuButtonService from '@/api/basic/menu-button'
export default {
  name: 'TcFunToolbarButton',
  props: {
    currVm: { type: Object, required: false, default: null }
  },
  data() {
    return {
      funButtons: []
    }
  },
  created() {
    menuButtonService.listByLogin(this.$route.name).then(result => {
      this.funButtons = result.menuButtons
    })
  },
  methods: {
    funClick(eventName) {
      console.log(this.$parent)
      this.$parent[eventName]()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
