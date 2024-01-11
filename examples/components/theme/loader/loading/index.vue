<style>
  .loadingClass {
    z-index: 0!important;
    .el-loading-spinner {
      top: 0%;
      margin-top: 30%;
    }
  }
</style>
<script>

import bus from '../../../../bus.js';
import './progress.js';

export default {
  data() {
    return {
      count: 0
    };
  },
  created() {
    const handleUserThemeConfigLoading = val => {
      if (val) {
        this.count++;
        if (this.count > 1) return;
        this.$bar.start();
      } else {
        this.count--;
        if (this.count) return;
        this.$bar.finish();
      }
    };

    bus.$on('user-theme-config-loading', handleUserThemeConfigLoading);

    this.$once('hook:beforeDestroy', () => {
      bus.$off('user-theme-config-loading', handleUserThemeConfigLoading);
    });
  }
};
</script>
