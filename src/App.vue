<template>
  <div class="cxd-lab-wrp">
    <!-- scroll 容器 -->
    <cxd-scroll @handle-scroll="handleScroll" ref="vs"> 
      <CxdHeader/>  
      <CxdNav/>  
      <!-- 滚动内容 -->
      <div class="scroll-dom">
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
      </div> 
    </cxd-scroll>
    <!-- 侧边栏 -->
    <SideComponent/>
  </div>
</template>

<script>
import CxdHeader from './components/CxdHeader.vue'
import SideComponent from './components/SideComponent.vue'
import CxdNav from './components/CxdNav.vue'
export default {
  components: {
    CxdHeader,
    SideComponent,
    CxdNav  
  },
  created () {
    // 还原滚动条位置
    this.$store.state.scroll = 0
    // 获得当前页面的链接
    this.$store.state.path = this.$route.path
    console.log(this.$store.state.path)
  },
  watch:{
    $route(to,from){
      // 页面切换的时候变更链接
      this.$store.state.path = this.$route.path
      this.$store.state.isGobalNavOpen = false
      this.scrollToTop()
    }
  },
  methods: {
    handleScroll(vertical, horizontal, nativeEvent) {
        this.$store.state.scroll = vertical.scrollTop
    },
    scrollToTop() {
      this.$refs['vs'].scrollTo ({
        x: '0',
        y: '0'
      })
    }
   }
}
</script>


<style lang="stylus">

// 加载样式文件

@import "/stylus/animation.styl"

// 全局样式

body
    margin 0
    padding 0
  html, body, #app
    width 100%
    height 100%
  a
    text-decoration-line none
  h1, h2, h3, h4, h5, p, a, span, div 
    font-family: "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    /*修改浏览器渲染字体效果*/ 
    -moz-osx-font-smoothing: grayscale;  
    -webkit-font-smoothing: antialiased; 
    font-weight normal
  .contents
    min-height 60%
    margin 0 80px
    padding-top 80px


// 加载进度条样式

#nprogress
  position fixed
  z-index 1000

#nprogress .bar
  background #000
  height 3px

#nprogress .peg
  box-shadow 0 0 10px rgba(0, 0, 0, .2), 0 0 5px rgba(0, 0, 0, .2)

#nprogress .spinner-icon
  border solid 3px transparent;
  border-top-color #000
  border-left-color #000
  animation nprogress-spinner 500ms linear infinite

#nprogress .spinner
  top 10px
  right 10px
// 局部样式

html, body, .cxd-lab-wrp 
  width 100%
  height 100%
  .scroll-dom
    min-height 2000px
    padding-bottom 120px
    overflow hidden
    section 
      height 400px 
      background-color #eee
      border-radius 10px
      margin 120px
      line-height 400px
      text-align center
      color #666
      font-size 12px

</style>
