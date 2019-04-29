<template>
  <div class="home-main-full-page">
      <div class="buttom"><div class="circle"></div></div>
      <div class="flex-content">
        <div class="mask left"></div>
        <div class="mid">
          <div class="top"></div>
          <transition name="fade">
          <div class="mask">
            <img :src="carouselList[0].src" alt="" class="op">
            <transition-group name="list" tag="div" class="img-mask">
              <div class="img-mask-group" 
                v-for="(src,index) in carouselList" 
                v-bind:key="src.src"
                v-show="currentIndex === index">
                  <div class="img-mask"></div>
                  <img :src="src.src" alt="">
              </div>
            </transition-group>
          </div>
          </transition>
          <div class="bottom"></div>
        </div>   
        <div class="mask right"></div> 
      </div>
      <div class="hero-text">
        <div class="hero-text-line">CLOUD</div>
        <div class="hero-text-line">EXPERIENCE</div>
        <div class="hero-text-line">DESIGN</div>
      </div>
      <div class="carouse">
          <div :class="[currentIndex === 0? 'current':'']" @click='changeCarouse(0)'></div>
          <div :class="[currentIndex === 1? 'current':'']" @click='changeCarouse(1)'></div>
          <div :class="[currentIndex === 2? 'current':'']" @click='changeCarouse(2)'></div>
      </div>
  </div>
</template>

<script>
export default {
data () {
    return {
      /**
       * 图片src
       */
      src: require('@/assets/c-mask.png'),
      /**
       * 轮播图数据
       */
      carouselList: [
        {
          text: '1. 第一张图片', 
          src: require('@/assets/c-mask.png')
        },
        {
          text: '2. 第二张图片',
          src: require('@/assets/x-mask.png'),
        },
         {
          text: '3. 第三张图片',
          src: require('@/assets/d-mask.png'),
        }
      ],
      /**
       * 当前正在显示的图片
       */
      currentIndex: 0,
      /**
       * 切换图片定时器
       */
      carouselTimer: null,
      /**
       * 是不是手动切换过
       */
      isChangeByUser: false,
    }
  },
    mounted () {
        this._begin()
    },
    methods: {
        changeCarouse(i) {
            this.currentIndex = i
            this.isChangeByUser = true 
        },
        autoPlay () {
            if (!this.isChangeByUser) {
              this.currentIndex++
              if (this.currentIndex >= this.carouselList.length) {
                this.currentIndex = 0
              }
            } else {
               this.isChangeByUser = false 
            }
        },
        _begin () {
            this.carouselTimer = setInterval (this.autoPlay, 5000)
            },
        }
}
</script>


<style lang="stylus">
  .home.first-page
    .home-main-full-page
      transform translateY(0)
  .home-main-full-page
    transition all 1s cubic-bezier(0.11, 0.73, 0.24, 0.98) //首屏动画
    width 100%
    height 101%
    position absolute
    top 0
    left 0
    .flex-content
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      display flex
      justify-content center
    .mid, .mask
      height 100%
    .mid
      width 46%
      display flex
      flex-direction column
      .mask
        height fit-content
        height -webkit-fit-content
        height -moz-fit-content
        position relative
        .img-mask
          position absolute
          top 0
          left 0
          right 0
          bottom 0
          overflow hidden
          .img-mask-group
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            img
              width 102%
              display block
              position absolute
              top -1%
              left -1%
              z-index 1
            .img-mask
              top 0
              left 0
              right 0
              bottom 0
              height 100%
              //background-color #ffffff
              z-index 2
              position relative
              overflow visible
              &:before
                position absolute
                width 300px
                top 0
                bottom 0
                content ""
                display block
                left -300px
                background-color #fff
                z-index 2
              &:after
                position absolute
                width 300px
                top 0
                bottom 0
                content ""
                display block
                right -300px
                background-color #fff
                z-index 2
        img.op
          width 100%
          display block 
          opacity 0
      .top
        background-color #fff
        -webkit-box-flex 1
        flex 0.9
      .bottom  
        background-color #fff
        -webkit-box-flex 1
        flex 1    
    .left, .right
      background-color #fff
      -webkit-box-flex 1
      flex 1
// 轮播图
.list-leave-active
  transition all .01s ease-in-out
.list-enter-active
  transition all 1s ease-out .01s
  .img-mask
    transition all .2s ease-in-out .01s
.list-leave-to
  opacity 0
.list-enter
  transform translateX(-80px)
  .img-mask
    background-color rgba(255,255,255,1)
.list-enter-to
  transform translateX(0px)
  .img-mask
    background-color rgba(255,255,255,0)
.home-main-full-page
  .carouse
    position absolute
    bottom 40px
    right 60px
    z-index 103
    div
      width 20px
      height 2px
      background-color #ccc
      float left
      margin-left 10px
      position relative
      &:after
        position absolute
        top -20px
        left 0
        width 100%
        height 40px
        display block
        content " "
      &.current
        background-color #000
      &:hover
        cursor pointer
        

// 文字
.hero-text
  position absolute
  left 40%
  transform translateX(-50%)
  bottom 22%
  font-size 72px
  z-index 3
  .hero-text-line  
    display block
    width fit-content
    width -webkit-fit-content
    width -moz-fit-content
    height 1.1em
    line-height 1.1em
    font-size 1em
    font-family "avenir", "PingFang SC", "SF Pro SC","SF Pro Text","Helvetica Neue",  Helvetica,  Roboto, 'Arial','microsoft yahei ui',"Microsoft YaHei",SimSun, sans-serif;
    -moz-osx-font-smoothing grayscale
    -webkit-font-smoothing antialiased
    color rgba(0,0,0,0)
    font-weight 900
    position relative
    animation showfont .05s ease-in-out .3s forwards
    &::after
      position absolute
      left 0
      bottom 0
      height 7px
      width 100%
      content " "
      display block
      background-color #000
      animation lineshow1 .4s ease-in-out ,lineshow2 .6s ease-in-out .4s
@media screen and (max-width: 1200px)
  .hero-text
    font-size 60px
@media screen and (max-width: 800px)
  .hero-text
    font-size 40px
    bottom 30%
    left 50%
@keyframes showfont 
  0%
    color rgba(0,0,0,0)
  100%
    color rgba(0,0,0,1)
@keyframes lineshow1
  0%
    height 1.1em
    width 0
  80%
    height 1.1em
    width 100%
  100%
    height 1.1em
    width 100%
@keyframes lineshow2
  0%
    height 1.1em
  20%
    height 1.1em
  100%
    height 7px
// 滚动提示动画
.buttom
  position absolute
  left 40px
  bottom 80px
  z-index 4
  width 1px
  height 60px
  background-color #000
  .circle
    width 9px
    height 9px
    position absolute
    top -4px
    left -4px
    background-color #000
    border-radius 100px
    animation move 2s infinite

@keyframes move
  from
    transform translateY(0)
  to
    transform translateY(60px)
</style>


