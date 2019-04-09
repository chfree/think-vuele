<template>
  <div class="tc-card">
    <div :style="tcTitle" class="tc-title">
      <div :style="iconContainerHeight" class="left-icon">
        <img :src="LeftIconSrc" :style="iconStyle" />
      </div>
      <div :style="iconContainerHeight" class="right-icon">
        <img :src="rightIconSrc" :style="iconStyle" @click="rightClick"/>
      </div>
      <div class="title-font">{{ title }}</div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TcCard',
  props: {
    iconSize: { type: Number, required: false, default: 16 },
    bgColor: { type: String, required: false, default: '' },
    titleHeight: { type: String, required: false, default: '36px' },
    LeftIconSrc: { type: String, required: false, default: '' },
    rightIconSrc: { type: String, required: false, default: '' },
    title: { type: String, required: false, default: '' }
  },
  data: () => ({
  }),
  computed: {
    tcTitle () {
      return {
        height: this.titleHeight,
        lineHeight: this.titleHeight,
        backgroundColor: this.bgColor
      }
    },
    iconStyle () {
      return {
        width: this.iconSize + 'px',
        height: this.iconSize + 'px',
        marginTop: ((parseInt(this.titleHeight, 10) - this.iconSize) / 2) + 'px'
      }
    },
    iconContainerHeight () {
      return {
        height: (parseInt(this.titleHeight, 10) - this.iconSize / 2) + 'px'
      }
    }
  },
  methods: {
    rightClick () {
      this.$emit('right-click')
    }
  }
}
</script>

<style scoped lang="scss">
.tc-card{
  width:100%;
  height:100px;
  border:1px solid #ddd;

  .tc-title{
    .title-font{
      font-size:16px;
      color:#fff;
      width:calc(100% - 48px);
    }

    .left-icon{
      float:left;
      width:48px;
      text-align: center;
    }

    .right-icon{
      float:right;
      width:48px;
      cursor: pointer;
      text-align: center;
    }
  }
}
</style>
