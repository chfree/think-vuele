<template>
  <div>
    <img ref="img" :src="fileUrl()" style="width:30px;height:30px;" @error="imgError"/>
  </div>
</template>

<script>
export default {
  name: 'TcImg',
  props: {
    fileId: { type: String, default: null }
  },
  data: () => ({
    downloadFile: '/api/v1/basic/file/fileUrl/',
    defaultImg: require('main/assets/logo.png')
  }),
  computed: {
  },
  methods: {
    fileUrl: function() {
      if (this.$tcUtil.isNull(this.fileId)) {
        return this.defaultImg
      }
      return process.env.API_HOST + this.downloadFile + this.fileId
    },
    imgError() {
      this.$refs.img.src = this.defaultImg
    }
  }
}
</script>

<style scoped lang="scss">
</style>
