<template>
    <div :class="['cxd-header',isHeaderOnTop(),resolvePath()]">
        <router-link to="/">
          <div class="logo">
            <transition name="fade-scroll">
              <img alt="logo" :src="resolveLogoFirst()" 
                :key="resolveLogoFirst()">
            </transition>
            <transition name="fade-scroll">
              <img alt="logo" :src="resolveLogoLast()" 
                :key="resolveLogoLast()">
            </transition>
          </div>
        </router-link>
        <div class="nav">
          <transition name="fade-scroll">
            <div class="nav-animate-content" :key="resolvePath()" 
              v-if="!this.$store.state.isGobalNavOpen">
              <router-link 
                v-for="nav in resolveNavData()" 
                :key="nav.link"
                :to='nav.link'>
                <p class="en">{{nav.name}}</p>
                <p class="cn">{{nav.cnName}}</p>
              </router-link>
              </div>
          </transition>
          <div class="humberger" @click="toggleGobalNav()"
           :class="[this.$store.state.isGobalNavOpen ? 'nav-open': 'nav-close']">
            <div class="humberger-item top"></div>
            <div class="humberger-item middle"></div>
            <div class="humberger-item bottom"></div>
          </div>
        </div>
        <!-- <div class="line"></div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      logo : {
        'cxd' : require('@/assets/logo-cxd.png'),
        'yunshe' : require('@/assets/logo-yunshe.png'),
        'guide' : require('@/assets/logo-guide.png')
      },
      navData : {
        '/' : [ // 首页导航
          {
            link : '/cxd/project',
            name : 'PROJECT',
            cnName : '项目总结'
          },
          {
            link : '/cxd/articles',
            name : 'ARTICLES',
            cnName : '团队博客'
          }, 
          {
            link : '/cxd/about',
            name : 'ABOUT',
            cnName : '关于我们'            
          }  
        ],
        '/guide' : [ // 设计规范导航
          {
            link : '/guide/portal',
            name : 'PORTAL',
            cnName : '官  网'
          },
          {
            link : '/guide/console',
            name : 'CONSOLE',
            cnName : '控制台'
          },
          {
            link : '/guide/motion',
            name : 'MOTION',
            cnName : '动  画'
          },
        ]
      }
    }
  },
  methods: {
    resolveLogoFirst() {
      return this.logo['cxd']
    },
    resolveLogoLast() {
      if (this.resolvePath() === '/guide' ) {
        return this.logo['guide']
      } else {
        return this.logo['yunshe']
      }
    },
    isHeaderOnTop() {
      if (this.$store.state.scroll == '0') {
        return 'top'
      } else {
        return 'not-top'
      }
    },
    resolvePath() {
      let path = this.$store.state.path
      path = '/' + path.split("/")[1];
      if (path === '/cxd') {
        return '/'
      } else {
        return path
      }
    },
    resolveNavData() {
      return this.navData[this.resolvePath()]
    },
    toggleGobalNav() {
      this.$store.state.isGobalNavOpen = !this.$store.state.isGobalNavOpen
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
    animation header-fade-in .4s ease-in-out .2s forwards
    z-index 1000
    height 60px
    position fixed // 导航栏定位
    top 0
    width 100%
    transition .4s all ease-in-out .2s
    background-color #fff
    opacity 0
    .logo
      left 20px
      height 20px
      position absolute
      top 50%
      transform translateY(-50%) 
      z-index 3
      transition .4s all ease-in-out .2s
      img 
        display block
        float left
        height 20px
    .nav
      right (30 + 36) px
      height 20px
      position absolute
      top 50%
      transform translateY(-50%)
      z-index 10
      transition .4s all ease-in-out .2s
      .humberger
        width 16px
        height 16px
        position absolute
        right -40px
        top 2px
        transition .2s all ease-in-out .4s
        &:hover
          cursor pointer
        .humberger-item
          width 16px
          height 2px
          background-color #000
          margin-top 3px
          transition .2s all ease-in-out
        &.nav-open
          .top
            transform rotate(45deg) translate(3.5px,3.5px)
          .middle
            transform scaleX(0)
          .bottom
            transform rotate(-45deg) translate(3.5px,-3.5px)
      a
        transition .2s all ease-in-out
        margin-left 30px 
        display block
        float left
        position relative
        height 20px
        p
          display block
          text-align center
          font-size 14px 
          font-weight 600
          color #000
          height 20px
          margin 0
          min-width 60px
          &.en
            opacity 1
            transition .4s all ease-out .2s, .2s opacity  ease-out .2s
            transform translateY(0)
          &.cn
            position absolute
            top 0
            left 0
            right 0
            opacity 0
            transition .2s all ease-in-out
            transform translateY(5px)
        &:hover
          p.en
            opacity 0
            transform translateY(-5px)
            transition .2s all ease-in-out
          p.cn
            opacity 1   
            transition .4s all ease-out .2s, .2s opacity  ease-out .2s  
            transform translateY(0px)      
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
      width 100%
      .logo
        left 40px
      .nav
        right (40+36) px
      a.router-link-active:after
        bottom -30px
      .line
        opacity 0
    


// 动画

@keyframes header-fade-in
  0%
    opacity 0
    transform translateY(-40px)
  100%
    opacity 1
    transform translateY(0) 
</style>

