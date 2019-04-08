<template>
    <div class="guide">
       <transition name="fade-full-page">
         <section class="first-page" 
         v-if="this.$store.state.hasFullPageScroll">
           <div class="hello">
             <img src="@/assets/guide/hello.png" alt="">
             <p>服务百度智能云业务的设计体系，基于简洁直观、统一美观的设计原则，保证最佳设计实践的复用，为了极致的用户体验。</p>
             <div class="button" @click="fullPageScroll()">
                 了解详情
             </div>
           </div>
           <div class="bg-sq"></div>
           <img src="@/assets/guide/banner.png" alt="" class="banner">
           <div class="bg-sq-2"></div>
           <div class="scroll-tip">SCROLL</div>
         </section>
       </transition>
       <div class="after-first scroll-dom" 
         :class="[this.$store.state.overFullPageScroll? ' ' : 'has-full-page']">
           <div v-for="(item, i) in items" :key="item.name" class="guide-list">
               <p class="order">0{{i + 1}}</p>
               <h3>{{item.name}}</h3>
               <p class="des des0">{{item.des[0]}}</p>
               <p class="des des1">{{item.des[1]}}</p>
               <div class="line"></div>
               <div class="block">
                   <p class="text">{{item.text}}</p>
                   <router-link :to="item.link">
                     READ MORE
                   </router-link>
               </div>
           </div>
           <div class="footer">
               <p class="title">THE EXTREMLY</p>
               <p class="title">USER EXPERIENCE</p>
               <div class="des">
                   <p>百度智能云用户体验团队成立于 2015 年</p>
                   <p>从零开始，建立团队内部设计流程</p>
                   <p>输出设计规范和控件库、协助前端构建前端控件库</p>
                   <p>并将整套控件规范分享到整个内部设计团队</p>
               </div>
               <router-link to="./cxd/about" class="button">
                   READ MORE
               </router-link>
               <Footer :kind="'black'"/>
           </div>
       </div>
    </div>
</template>

<script>
import { link } from 'fs';
import Footer from '@/components/Footer.vue'
export default {
    components: {Footer},
    data(){
        return {
            items : [
                {
                    name : 'PORTAL DESIGN',
                    des : ['HOME、PRODUCT','SOLUTION、MARKETING DESIGN'],
                    text : 'Portal 端平台规范是针对官网页面编写，意义在于保证统一、提高效率、利于设计自查、利于跨部门协作、共享资源。',
                    link: '/guide/portal'
                },
                {
                    name : 'CONSOLE DESIGN',
                    des : ['PRODUCT、SKETCH WIDGET LIB','PROJECT、INDEPENDANT PLATFORM'],
                    text : 'Console 端平台规范是为了对内统一设计语言，提供一套完整的设计依据和准则。对外设计异质化的同时方便上下游和跨团队协作快速表达需求和想法，既能提升开发效率，又能保证最终落地效果的一致性。',
                    link: '/guide/console'
                },
                {
                    name : 'MOTION DESIGN',
                    des : ['GUIDE、MOTION GRAPHIC','PAGE ANIMATION'],
                    text : '在页面中引入动画的主要为了帮助用户理解页面交互形式，提高页面视觉效果，加深用户对页面的印象，降低长时间浏览的枯燥感。',
                    link: '/guide/motion'
                }
            ]
        }
    },
    created(){
        this.$store.state.hasFullPageScroll = true
        this.$store.state.screenHeight = document.body.scrollHeight
    },
    destroyed(){
        this.$store.state.hasFullPageScroll = false
        this.$store.state.overFullPageScroll = false
    },
    methods: {
      fullPageScroll() {
          this.$emit('scroll-to')
      }
    }
}
</script>


<style lang="stylus">
//底部
.guide
  .guide-list
    height 600px
    padding 100px 0
    position relative
    z-index 10
    &:after
      content ''
      display block
      width 120%
      transform translateX(-10%) rotate(-6deg)
      bottom 0
      background-color #f2f2f2
      position absolute
      z-index -1
      top 0
    &:nth-of-type(odd):after
      background-color #fff
    .order
      font-family "Montserrat",Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
      font-size 27px
      text-align center
    h3
      text-align center
      font-size 42px
      font-weight 900
      margin 40px 0
      font-family Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    .des
      font-size 18px
      width 300px
      margin auto
      text-align center
      font-weight 500
      font-family "Montserrat",Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    .line
      width 30px
      background-color #000
      height 1px
      margin 60px auto 100px
    .block
      width 880px
      margin auto
      .text
        width 390px
        font-size 16px
        line-height 28px
        font-weight 500
        float left
      a
        display block
        float right 
        width 220px
        height 50px
        background-color #000
        text-decoration none 
        font-size 12px
        line-height 46px
        border 2px solid transparent
        box-sizing border-box
        color #fff
        text-align center
        font-weight 600
        transition .2s all ease-in-out
        margin 20px 0
        &:hover
          color #000
          background-color transparent
          border 2px solid #000
// 底部

.guide
  .footer
    width 100%
    height 800px
    background-color #000
    margin-top -100px
    padding-top 280px
    p.title
      font-size 50px
      line-height 80px
      font-weight 900
      color #fff
      text-align center
      margin 0
      font-family Avenir, "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    div.des
      width 400px
      margin 80px auto
      p
        color #ffffff
        font-size 16px
        line-height 26px
        font-weight 500
        margin 10px auto
        text-align center
    .button
        display block
        margin 110px auto
        width 220px
        height 50px
        background-color #fff
        text-decoration none 
        font-size 12px
        line-height 46px
        border 2px solid transparent
        box-sizing border-box
        color #000
        text-align center
        font-weight 600
        transition .2s all ease-in-out
        &:hover
          color #fff
          background-color transparent
          border 2px solid #fff
          cursor pointer
// 头部
.guide
  width 100%
  overflow hidden
  .first-page
    height 140vh
    width 100%  
    background-color #fff
    position fixed
    z-index 1
    .scroll-tip
      font-size 12px
      color #000
      position absolute
      left 50%
      bottom 40vh
      z-index 2
      line-height 120px
      &:after
        content ''
        width 1px
        height 40px
        position absolute
        left 50%
        transform translateX(-50%)
        background-color #000
        top 80px
    .hello
      position absolute
      top 180px
      left 160px
      width 40%
      z-index 5
      img 
        width 100%
      p
        color #333
        font-size 16px
        line-height 28px
        margin 30px 0 50px
        width 80%
      div.button
        width 160px
        height 50px
        background-color #000
        box-sizing border-box
        text-align center
        line-height 46px
        color #fff
        border 2px solid transparent
        transition .2s all ease-in-out
        &:hover
          cursor pointer
          background-color transparent
          color #000
          border 2px solid #000
    .bg-sq
      position absolute
      top 24%
      transform rotate(-6deg) translateX(-10%)
      width 120%
      height 70vh
      background-color #F2F2F2
      z-index 1
    img.banner
      z-index 2
      position absolute
      right 60px
      width 38%
      top 80px
    .bg-sq-2
      position absolute
      bottom 200px
      left 0
      width 100%
      height 300px
      z-index 3
      // overflow hidden
      &:before
        content ''
        display block
        width 120%
        height 200px
        transform rotate(-6deg) translateX(-10%) translateY(100%)
        background-color #fff
        right 0
  .after-first
    &.has-full-page
      transform translateY(100vh)
      height 100vh
      overflow hidden
    transition .8s all cubic-bezier(0.86, 0, 0.07, 1) 
    padding-top 100px
</style>

