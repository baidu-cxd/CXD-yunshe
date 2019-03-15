<template>
  <div class="cxd-lab-wrp">
    <!-- scroll 容器 -->
    <cxd-scroll @handle-scroll="handleScroll" ref="vs"> 
      <CxdHeader @scroll-to-top="scrollToTop"/>  
      <!-- 滚动内容 -->
      <div class="scroll-dom">
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
        <section class="section">这是一个板块</section>
        <Footer/>
      </div> 
    </cxd-scroll>
    <!-- 侧边栏 -->
    <SideComponent/>
  </div>
</template>

<script>
import CxdHeader from './components/CxdHeader.vue'
import SideComponent from './components/SideComponent.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    CxdHeader,
    SideComponent,
    Footer
  },
  created () {
    // 还原滚动条位置
    this.$store.state.scroll = 0
  },
  methods: {
     handleScroll(vertical, horizontal, nativeEvent) {
        this.$store.state.scroll = vertical.scrollTop
     },
      scrollToTop() {
      console.log('haha ')
      this.$refs['vs'].scrollTo ({
        x: '0',
        y: '0'
      })
     }
   }
}
</script>


<style lang="stylus">
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

</style>
