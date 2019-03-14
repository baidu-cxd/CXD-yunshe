<template>
    <div :class="['cxd-header',isHeaderOnTop()]">
        <router-link to="/">
          <img alt="logo" class="logo" src="@/assets/logo.svg">
        </router-link>
        <div class="nav">
          <router-link to='/lab'>工坊</router-link>
          <router-link to='/link'>网址导航</router-link>
          <router-link to='/doc'>开发者文档</router-link>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  methods: {
    isHeaderOnTop() {
      if (this.$store.state.scroll == '0') {
        return 'top'
      } else {
        return 'not-top'
      }
    }
  }
}
</script>

<style lang="stylus">
  //  提高滚动条地位
  .__rail-is-vertical
    position fixed !important 
    z-index 10001 !important 
  
  //  顶部导航栏全局样式
  .cxd-header
    animation header-fade-in .4s ease-in-out .4s forwards
    z-index 100
    height 60px
    position fixed // 导航栏定位
    top 0
    left 40px
    right 40px
    transition .4s all ease-in-out .2s
    background-color #fff
    opacity 0
    .logo
      left 10px
      height 20px
      position absolute
      top 50%
      transform translateY(-50%) 
      z-index 3
      transition .4s all ease-in-out .2s
    .nav
      right 10px
      height 20px
      position absolute
      top 50%
      transform translateY(-50%)
      transition .4s all ease-in-out .2s
      z-index 10
      a
        transition .2s all ease-in-out
        color #666
        margin-left 30px
        font-size 14px 
        display block
        float left
        position relative
        &:hover
          color #000
        &.router-link-active
          color #000
          &:after
            content ''
            display block
            height 2px
            width 100%
            background-color #000
            position absolute
            bottom -20px
            left 0
            transition .2s all ease-in-out .3s
    .line
      position absolute
      bottom 0
      height 1px
      background-color #e6e6e6
      left 0
      right 0
      transform scale(1) translateY(0px)
      opacity 1
      transition .2s all ease-in-out .4s
  .cxd-header.top
      height 80px
      left 80px
      right 80px
      .logo
        left 0px
      .nav
        right 0px
      a.router-link-active:after
        bottom -30px
    


// 动画

@keyframes header-fade-in
  0%
    opacity 0
    transform translateY(-40px)
  100%
    opacity 1
    transform translateY(0) 
</style>

