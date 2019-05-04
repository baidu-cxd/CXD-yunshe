<template>
  <div class="cxd">
    <!-- 页面头部 -->
    <transition name="fade-scroll">
      <CxdHeader v-if="this.$store.state.isShowHeader"/>
    </transition>
    <!-- 全局导航栏 --> 
    <CxdNav/>  
    <!-- 页面本体 -->
    <transition name="fade-router-view">
        <router-view key="this.$route.path"/>
    </transition>
    <!-- 侧边栏 -->
    <SideComponent/>  
  </div>
</template>

<script>
import CxdNav from '@/components/CxdNav.vue'
import CxdHeader from '@/components/CxdHeader.vue'
import SideComponent from '@/components/SideComponent.vue'
export default {
  components: {
    CxdHeader,
    SideComponent,
    CxdNav 
  },
  created () {
    // 获得当前页面的链接
    this.$store.state.path = this.$route.path
  },
  watch:{
    $route(to,from){
      // 页面切换的时候变更链接
      this.$store.state.path = this.$route.path
      this.$store.state.scroll = 0
    }
  },
}
</script>


<style lang="stylus">

// 加载全局样式文件
@import "/stylus/animation.styl"
@import "/stylus/components.styl"
// 全局样式
body
    margin 0
    padding 0
  html, body, #app, .cxd
    width 100%
    min-width 1400px
    height 100%
    overflow hidden
  a
    text-decoration-line none
  h1, h2, h3, h4, h5, p, a, span, div 
    font-family: Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
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
</style>
