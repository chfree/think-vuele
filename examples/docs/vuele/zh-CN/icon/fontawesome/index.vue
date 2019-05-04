<template>
  <div>
    <h3>font-awesome5.8.0</h3>
    <div style="height:60px;">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
      <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
      <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
    <div style="padding:10px 0px 30px;">
      <i class="fas fa-shield-alt"></i> normal
      <i class="fas fa-shield-alt fa-rotate-90"></i> fa-rotate-90
      <i class="fas fa-shield-alt fa-rotate-180"></i> fa-rotate-180
      <i class="fas fa-shield-alt fa-rotate-270"></i> fa-rotate-270
      <i class="fas fa-shield-alt fa-flip-horizontal"></i> fa-flip-horizontal
      <i class="fas fa-shield-alt fa-flip-vertical"></i> fa-flip-vertical
    </div>
    <div>
      <el-row>
        <el-col :span="3" v-for="icon in icons" :key="icon" :style="style" class="icon-el">
          <div>
            <i :class=" icon" />
          </div>
          <div style="font-size:14px;">{{icon}}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import icons from './icons.js'
export default {
  data() {
    return {
      icons,
      style: {
        color: '#394160',
        fontSize: '32px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-el{
  text-align: center;
  height: 110px;
  cursor: pointer;
}
.icon-el:hover{
  background: #eee;
  border:1px solid #ddd;
}
</style>