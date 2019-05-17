## XgPlayer
XgPlayer 西瓜视频播放器

### 使用说明
此版本依赖于[xgplayer-vue组件](https://github.com/bytedance/xgplayer-vue),[xgplayer](https://h5player.bytedance.com/)

### 基础示例
:::demo
```html
<tc-xg-player :config="config" />

<script>
  export default {
    data() {
      return {
        config: {
          id:'xg',
          url:'https://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4',
          poster: "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg"
        }
      }
    }
  }
</script>
```
:::

### 参数配置
[西瓜播放器使用配置说明](https://h5player.bytedance.com/config/)
