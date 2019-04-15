<template>
    <div class="guide">
      <!-- 全屏滚动的区域 --> 
      <fullPage :max="4" ref="fullpage">
        <!-- 首屏 --> 
        <div class="full-page-child" id="child-0" key="child-0" v-if="this.$store.state.fullPage.now === 0" slot="group">
          <video src="https://cxd-public.cdn.bcebos.com/cxd-guide/bg.mp4" autoplay="autoplay" muted="muted" loop="loop"></video>
          <div class="banner-h">
            <img src="@/assets/guide/hello.png" alt="">
            <p>
              服务百度智能云业务的设计体系，基于简洁直观、统一美观的设计原则，保证最佳设计实践的复用，为了极致的用户体验
            </p>
            <div class="action-button" @click="$refs.fullpage.changePage('down')">START</div>
          </div>
          <div class="scroll-tip">
            <p>SCROLL</p>
            <div class="line"></div>
          </div>
          <div class="gr-bg"></div>
        </div>
        <!-- 第二屏 --> 
        <div class="full-page-child child-after" slot="group" 
          key="child-1" v-else-if="this.$store.state.fullPage.now === 1">
          <div class="after-page-content">
            <p class="index">{{items[0].index}}</p>
            <p class="name">{{items[0].name}}</p>
            <p class="des">{{items[0].des[0]}}</p>
            <p class="des">{{items[0].des[1]}}</p>
            <div class="line"></div>
            <p class="text">{{items[0].text}}</p>
            <a :href="items[0].link" class="link">
              READ MORE
            </a>
          </div>
          <div class="gr-bg" slot="bg" style="top:-60%;"></div>
        </div>
        <!-- 第三屏 --> 
        <div class="full-page-child child-after" slot="group"
          key="child-2" v-else-if="this.$store.state.fullPage.now === 2">
          <div class="after-page-content">
            <p class="index">{{items[1].index}}</p>
            <p class="name">{{items[1].name}}</p>
            <p class="des">{{items[1].des[0]}}</p>
            <p class="des">{{items[1].des[1]}}</p>
            <div class="line"></div>
            <p class="text">{{items[1].text}}</p>
            <a :href="items[1].link" class="link">
              READ MORE
            </a>
          </div>
          <div class="gr-bg" slot="bg" style="top:13%;"></div>
        </div>
        <!-- 第四屏 --> 
        <div class="full-page-child child-after" slot="group"
          key="child-3" v-else-if="this.$store.state.fullPage.now === 3">
          <vue-scroll @handle-scroll="handleScroll">
            <div class="height-content">
                <div class="after-page-content">
                <p class="index">{{items[2].index}}</p>
                <p class="name">{{items[2].name}}</p>
                <p class="des">{{items[2].des[0]}}</p>
                <p class="des">{{items[2].des[1]}}</p>
                <div class="line"></div>
                <p class="text">{{items[2].text}}</p>
                <a :href="items[2].link" class="link">
                READ MORE
                </a>
              </div>
            </div>
            <div class="page-footer">
              <div class="gr-bg"></div>
              <img src="@/assets/guide/footer.png" alt="">
              <p class="des">
                百度智能云用户体验团队成立于 2015 年
              </p>
              <p class="des">
                从零开始，建立团队内部设计流程
              </p>
              <p class="des">
                输出设计规范和控件库、协助前端构建前端控件库
              </p>
              <p class="des">
                并将整套控件规范分享到整个内部设计团队
              </p>
              <router-link to="/cxd/about" class="link">READ MORE</router-link>
              <Footer :kind="'black'"/>
            </div>
          </vue-scroll>
        </div>
      </fullPage>
    </div>
</template>

<style lang="stylus">
.guide
  height 100%
  overflow hidden
  .height-content
    height 100vh
    position relative
// 内容
.page-footer
  width 100%
  background-color #000
  height 760px
  margin-top 200px
  position relative
  img
    display block
    width 80px
    padding-top 0
    margin 0 auto 100px
    display block 
  p.des
    display block
    width 400px
    margin 0px auto
    color #ffffff
    font-size 14px
    line-height 26px
    font-weight 500
    text-align center
  .gr-bg
    background-color #000
    height 300px
    top -30%
  .link
    display block
    width 180px
    height 50px
    line-height 46px
    text-align center
    margin 60px auto
    background-color #fff
    color #000
    font-size 14px
    font-weight 900
    letter-spacing 3px
    box-sizing border-box
    transition .2s all ease-in-out
    border solid 2px transparent
    &:hover 
      cursor pointer
      color #fff
      border solid 2px #fff
      background-color transparent
    
.after-page-content
  width 880px 
  height 380px
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  div.line
    width 30px
    height 1px
    margin 40px auto 60px
    background-color #000
  p,a
    text-align center
    &.index
      font-size 27px
      font-family montserrat
      line-height 30px
      height 30px
      margin 0 0 30px 0
    &.name
      margin 30px 0
      font-weight 900
      font-size 42px
      line-height 60px
    &.des
      font-weight 900
      font-size 14px
      margin 0
      line-height 25px
    &.text
      width 480px
      float left
      display block
      text-align left 
      font-weight 500
      font-size 14px
      line-height 25px
    &.link
      float right
      width 180px
      height 50px
      line-height 46px
      text-align center
      margin-top 20px
      background-color #000
      color #fff
      font-size 14px
      font-weight 900
      letter-spacing 3px
      box-sizing border-box
      transition .2s all ease-in-out
      border solid 2px transparent
      &:hover 
        cursor pointer
        color #000
        border solid 2px #000
        background-color transparent
// 第一屏
.full-page-child
  overflow hidden
.gr-bg
  position absolute
  z-index -1
  width 300%
  height 550px
  background-color #f2f2f2
  transform rotate(-4deg) translateX(-50%) translateY(-20%)
  transition 1s all ease-in-out
  &.last
    background-color #000
#child-0
  background-color #fff
  overflow hidden
  video
    width 100% 
    mask url(../assets/guide/banner.png) 0 0/36% no-repeat
    position relative
    top 80px
    left 63%
    z-index 2
  .gr-bg
    bottom -35%
    z-index 1
  .banner-h
    width 600px
    height 360px
    position absolute
    z-index 10
    top 50%
    left 120px
    transform translateY(-55%)
    img 
      width 100%
    p
      margin 20px 0 50px
      font-size 15px
      line-height 26px
      width 80%
      color #333333
    div.action-button
      width 180px
      height 60px
      line-height 56px
      text-align center
      background-color #000
      color #fff
      font-size 14px
      font-weight 900
      letter-spacing 3px
      box-sizing border-box
      transition .2s all ease-in-out
      border solid 2px transparent
      &:hover 
        cursor pointer
        color #000
        border solid 2px #000
        background-color transparent
  .scroll-tip
    width 80px
    height 100px
    position absolute
    bottom 0
    left 50%
    transform translateX(-50%)
    z-index 2
    p
      width 80px
      text-align center
      height 20px
      line-height 20px
      font-size 12px
      color #000
      letter-spacing 1px
    .line
      width 1px
      height 80px
      margin auto 
      background-color #000
      animation line-scale 3s ease-in-out infinite
.gr-bg.top
    top -55%
.gr-bg.bottom
    bottom -50%
// 页脚
.page-footer
  background-color #000
  .footer-content
    color #fff
// 动画
@keyframes line-scale 
  0%
    height 0px
  80%
    height 80px

</style>

<script>
import Footer from '@/components/Footer.vue'
import fullPage from '@/components/fullPage.vue'
export default {
    components: {Footer, fullPage},
    data(){
        return {
            items : [
                {
                    index : '01',
                    name : 'PORTAL DESIGN',
                    des : ['HOME、PRODUCT','SOLUTION、MARKETING DESIGN'],
                    text : 'Portal 端平台规范是针对官网页面编写，意义在于保证统一、提高效率、利于设计自查、利于跨部门协作、共享资源。',
                    link: '/guide/portal'
                },
                {
                    index : '02',
                    name : 'CONSOLE DESIGN',
                    des : ['PRODUCT、SKETCH WIDGET LIB','PROJECT、INDEPENDANT PLATFORM'],
                    text : 'Console 端平台规范是为了对内统一设计语言，提供一套完整的设计依据和准则。对外设计异质化的同时方便上下游和跨团队协作快速表达需求和想法，既能提升开发效率，又能保证最终落地效果的一致性。',
                    link: '/guide/console'
                },
                {
                    index : '03',
                    name : 'MOTION DESIGN',
                    des : ['GUIDE、MOTION GRAPHIC','PAGE ANIMATION'],
                    text : '在页面中引入动画的主要为了帮助用户理解页面交互形式，提高页面视觉效果，加深用户对页面的印象，降低长时间浏览的枯燥感。',
                    link: '/guide/motion'
                }
            ]
        }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
      handleScroll(e){
        this.$store.state.scroll = e.scrollTop
      }     
    },
    destroyed(){
      window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>


