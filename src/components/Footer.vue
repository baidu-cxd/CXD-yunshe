<template>
    <div class="cxd-footer" :class="kind">
        <router-link to="/">CxD</router-link>
        <a href="http://bce-website.cdn.bcebos.com/">Cloud Lab</a>
        <p class="copy">Copyright ©2018 Cxd-Design</p>
    </div>
</template>

<script>
export default {
  props: {
    kind: {
      default: 'white'
    } 
    }
}
</script>


<style lang="stylus">
  .cxd-footer
    height 120px
    margin 0
    position absolute
    bottom 0
    width 100%
    background-color #fff
    a
     line-height 20px
     font-size 14px
     display block
     margin 50px -50px 0 80px
     float left 
     color #3a3a3a
     font-weight bold
     &:hover
       text-decoration underline
    &:before
      margin 0 80px 
      width auto
      content ""
      display block
      height 1px
      background-color #DFDFDF
    p.copy 
      float right
      margin 50px 80px 0 0
      color #000
      line-height 20px
      font-size 14px
      font-weight 500

// 皮肤
.cxd-footer.black
  background-color transparent
  a, p
    color #fff
  &:before
    background-color rgba(255, 255, 255, .2)


</style>

