<template>
    <div class="cxd-side-component">
        <a href="http://yunshe.design">
          <div class="left" @click.native="flushCom">
            CLOUD EXPERIENCE DESIGN
          </div>          
        </a>
        <a href="http://cloud.baidu.com" class="right-logo">
           <img src="@/assets/baiduyun@2x.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    methods:{
        flushCom:function(){
            this.$router.go(0);
        }
    }
}
</script>
<style lang="stylus">
.cxd-side-component
  .left, .right-logo
    animation sidebar-fade-left .4s ease-in-out .4s forwards 
    position fixed
    z-index 999
  // 左侧
  .left
    font-size 12px
    opacity 0
    color #000
    font-weight 900
    font-family Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    transform rotate(-90deg) translateY(-50%)
    top 50%
    left -43px
    display block
    &:hover:after
      width 100%
    &:after
      width 0%
      height 2px
      content ''
      display block
      background-color #000
      position absolute
      top 50%
      right 0
      transform translateY(-1px)
      transition .2s all ease-in-out
  // 右侧
  .right-logo
    animation-name sidebar-fade-right
    font-weight 900
    right -24px
    opacity 0
    transform translateY(-50%)
    top 50% 
    img 
      height  18px
      transform rotate(90deg)
@keyframes sidebar-fade-left
  0%
    transform rotate(-90deg) translateY(-150%)
    opacity 0
  100%
    opacity 1
    transform rotate(-90deg) translateY(-50%)
@keyframes sidebar-fade-right
  0%
    transform translateY(-50%) translateX(40px)
    opacity 0
  100%
    opacity 1
    transform translateY(-50%) translateX(0px)
</style>

