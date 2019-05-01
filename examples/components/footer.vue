<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <h4>Element</h4>
        <a href="https://element.eleme.cn/#/zh-CN" class="footer-main-link" target="_blank">官网</a>
        <a href="https://github.com/ElemeFE/element" class="footer-main-link" target="_blank">代码仓库</a>
      </div>
      <div class="footer-social">
        <p class="footer-social-title">Current Version {{ version  }}</p>
      </div>
    </div>
    <div style="text-align:center;font-size:14px;color:#3a4e64;">
      <span>Copyright©2019 Tennetcn</span>
      <span> | </span>
      <span>鄂ICP备15015935号-2</span>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    background-color: #F7FBFD;
    width: 100%;
    padding: 40px 150px;
    margin-top: -340px;
    box-sizing: border-box;
    height: 340px;

    .container {
      box-sizing: border-box;
      width: auto;
    }

    .footer-main {
      font-size: 0;
      display: inline-block;
      vertical-align: top;
      margin-right: 110px;
      h4 {
        font-size: 18px;
        color: #333;
        line-height: 1;
        margin: 0 0 15px 0;
      }

      .footer-main-link {
        display: block;
        margin: 0;
        line-height: 2;
        font-size: 14px;
        color: #666;

        &:hover {
          color: #333;
        }
      }
    }

    .footer-social {
      float: right;
      text-align: right;
      .footer-social-title {
        color: #666;
        font-size: 18px;
        line-height: 1;
        margin: 0 0 20px 0;
        padding: 0;
        font-weight: bold;
      }

      .elementdoc {
        transition: .3s;
        display: inline-block;
        line-height: 32px;
        text-align: center;
        color: #c8d6e8;
        background-color: transparent;
        size: 32px;
        font-size: 32px;
        vertical-align: middle;
        margin-right: 20px;
        &:hover {
          transform: scale(1.2);
          color: #8D99AB;
        }
      }

      .doc-icon-gitter {
        margin-right: 0;
      }
    }
  }

  .el-popover.footer-popover {
    padding: 0;
    min-width: 120px;
    line-height: normal;
    box-shadow: 0 0 11px 0 rgba(174, 187, 211, 0.24);

    .footer-popover-title {
      border-bottom: solid 1px #eaeefb;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #99a9bf;
      background-color: #f8f9fe;
    }

    img {
      size: 100px;
      margin: 10px;
    }
  }
  @media (max-width: 1140px) {
    .footer {
      height: auto;
    }
  }
  @media (max-width: 1000px) {
    .footer-social {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .footer {
      .footer-main {
        margin-bottom: 30px;
      }
    }
  }
</style>
<script>
import Tennetcn from 'main/index.js'
const { version } = Tennetcn

export default {
  data() {
    return {
      version
    }
  },

  computed: {
    lang() {
      return this.$route.path.split('/')[1] || 'zh-CN'
    }
  }
}
</script>
