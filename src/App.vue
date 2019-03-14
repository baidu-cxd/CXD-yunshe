<template>
  <div class="cxd-lab-wrp">
    <!-- scroll 容器 -->
    <cxd-scroll @handle-scroll="handleScroll"> 
      <CxdHeader/>  
      <div class="child-dom"></div> 
    </cxd-scroll>
  </div>
</template>

<script>
import CxdHeader from './components/CxdHeader.vue'
export default {
  components: {
    CxdHeader
  },
  created () {
    // 还原滚动条位置
    this.$store.state.scroll = 0
  },
  methods: {
     handleScroll(vertical, horizontal, nativeEvent) {
        this.$store.state.scroll = vertical.scrollTop
     }
   }
}
</script>


<style lang="stylus">
// 局部样式

html, body, .cxd-lab-wrp 
  width 100%
  height 100%
  .child-dom
    min-height 3000px


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
