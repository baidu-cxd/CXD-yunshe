<template>
    <div class="home-about">
        <h2>WHO WE ARE</h2>
        <p>
            百度云设计团队（Baidu Cloud Experience Design），亦称CxD·云舍，简称CxD <br/>
            CxD作为服务于百度云业务线的用户体验团队 <br/>
            旨在保证最佳设计实践的复用，致力于更好的用户体验 <br/>
            在产品设计过程中将商业价值纳入设计的考虑要素中 <br/>
            以助力公司实现产品更大的价值化 <br/>
            我们的愿景是成为拥抱变化、打破常规、预见未来的团队
        </p>
        <router-link to="/about">
          <div class="cxd-button-white">READ MORE</div>
        </router-link>
        <div class="bg"></div>
        <img src="@/assets/home/bg-mask-left.png" alt="" class="bg-left">
        <img src="@/assets/home/bg-mask-right.png" alt="" class="bg-right">
    </div>
</template>

<style lang="stylus">
.home-about
  overflow hidden
  padding-bottom 120px
  margin-top -0px
  h2
    padding-top 160px
    font-size 47px
    line-height 57px
    margin 0
  p
    width 600px
    font-size 16px
    line-height 32px
    margin 50px auto
    text-align center
  .cxd-button-white
    margin-top 60px
    margin auto
  .bg
    position absolute
    top 0
    left 295px
    right 295px
    width auto
    height 681px
    background-color #fff
    z-index -1
  .bg-left,.bg-right
    width 300px
    height 681px
    position absolute
    top 0
  .bg-left 
    left 0
  .bg-right
    right 0 
</style>

