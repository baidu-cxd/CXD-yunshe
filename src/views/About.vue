<template>
  <div class="about">
    <vue-scroll @handle-scroll="handleScroll">
      <div class="content">
        <h1>ABOUT</h1>
        <div class="line"></div>
        <div class="card-content">
          <!--第一项卡片-->
          <div class="card-item">
            <div class="img-content">
              <img src="@/assets/about/1.png" alt="">
            </div>
            <div class="text-content">
              <h3>复眼视角</h3>
              <p class="zn-ch">
                更多维的视角去理解这个世界，力求使每一个个体能统一和谐的存在于这个系统之中，
                最终在复合元素的共创之中存在
              </p>
              <p class="en">
                To understand the world from a more multi-dimensional perspective, 
                and to strive for the unity and harmony of each individual in the system, 
                and ultimately in the co-creation of complex elements
              </p>
            </div>
          </div>
          <!--第二项卡片-->
          <div class="card-item">
            <div class="img-content">
              <img src="@/assets/about/2.png" alt="">
            </div>
            <div class="text-content">
              <h3>系统化思维</h3>
              <p class="zn-ch">
                擅长用系统的思维在系统中看到其中的势，在最复杂的思想中找到最核心的东西，
                驯服复杂，让所有的功能被正确理解
              </p>
              <p class="en">
                Be good at using systematic thinking to see the potential in the system, 
                to find the core in the most complex thinking, to tame the complexity, 
                and to make all the functions understood correctly
              </p>
            </div>
          </div>
          <!--第三项卡片-->
          <div class="card-item">
            <div class="img-content">
              <img src="@/assets/about/3.png" alt="">
            </div>
            <div class="text-content">
              <h3>洞悉用户</h3>
              <p class="zn-ch">
                掌握用户行为模式，了解用户的真实想法，有问题分析和挖掘能力，
                能够从数据、用户处敏锐的洞察到机会点和需求点
              </p>
              <p class="en">
                Grasp user behavior patterns, understand user's real thoughts, 
                problem analysis and mining capabilities, and be able to penetrate data, 
                user insights into opportunities and needs
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--照片墙-->
      <photoWapper/>
      <!--footer-->
      <Footer/>
    </vue-scroll>
  </div>
</template>

<script>
import photoWapper from '@/components/photoWapper.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {photoWapper,Footer},
  methods: {
    handleScroll(e){
        this.$store.state.scroll = e.scrollTop
    },       
  }
}
</script>

<style lang="stylus">
.about
  .cxd-footer
    position relative
  animation component-move-in .4s ease-in-out .4s 
  background-color #F8F9FA
  overflow hidden
  width 100%
  height 100%
  .content  
    padding 80px 0
    h1
      font-size 36px
      line-height 49px
      font-weight 900
      margin 50px auto 20px
      text-align center
      color #3A3A3A
    .line
      margin auto 
      height 2px
      width 60px
      background-color #3a3a3a
    .card-content
      width 1200px
      height 640px
      margin 60px auto 20px
      .card-item
        float left
        width 350px
        margin 0 25px
        .img-content
          width 350px
          height 220px
          background-color #000
          img 
            width 100%
        .text-content
          margin 0 18px
          h3
            margin 50px 0
            text-align center
            font-size 30px
            font-weight 700
            line-height 48px
            color #3A3A3A
          p.zn-ch
            margin 50px 0
            font-size 14px
            line-height 30px
            color #3A3A3A
          p.en
            margin 50px 0 0 0
            font-size 14px
            line-height 26px
            color #3A3A3A
            


</style>


