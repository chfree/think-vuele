<script>
  import fontawesome from './icon/fontawesome'
  import remixicon from './icon/remixicon'
  export default {
    components: {fontawesome, remixicon},
    created() {
    },
    mounted() {
    },
    methods: {
    },
    data() {
      return {
      }
    }
  }
</script>
## Icon图标组件

可以使用的图标组件

### font-awesome
安装
``` shell
npm install @fortawesome/fontawesome-free --save-dev
```
引入样式
```css
import '@fortawesome/fontawesome-free/css/all.min.css'
```

5.8.1图标示例
<div style="height:300px;overflow-y:auto;">
<fontawesome />
</div>

### remixicon
安装
``` shell
npm install remixicon --save-dev
```
引入样式
``` css
import 'remixicon/fonts/remixicon.css'
```

1.2.0图标示例
<div style="height:300px;overflow-y:auto;">
<remixicon />
</div>