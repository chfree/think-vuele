<template>
  <div>
    <h3>remixicon</h3>
    
    <div>
      <el-row>
        <el-col :span="3" v-for="icon in icons" :key="icon" class="icon-el">
          <i :class=" icon" :style="style" />
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
  height: 100px;
  cursor: pointer;
}
.icon-el:hover{
  background: #eee;
  border:1px solid #ddd;
}
</style>