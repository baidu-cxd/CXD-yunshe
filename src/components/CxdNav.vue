<template>
    <div class="cxd-nav">
      <div class="nav-content">
        <transition name="fade-scroll">
          <div class="animation-content"  @click="close()" v-if="this.$store.state.isGobalNavOpen">
            <router-link 
                v-for="nav in navData" 
                :key="nav.link"
                :to='nav.link'>
                <p class="en">{{nav.name}}</p>
                <p class="cn">{{nav.cnName}}</p>
            </router-link>
          </div>
        </transition>
      </div>
      <transition name="fade-opacity">
          <div class="nav-bg" v-if="this.$store.state.isGobalNavOpen"></div>
      </transition>
    </div>
</template>

<script>
export default {
 data() {
    return {
      navData : [
          {
              link: '/',
              name: 'HOME',
              cnName: '云舍首页'
          },
          {
              link: '/poject',
              name: 'PROJECT',
              cnName: '项目总结'
          },
          {
              link: '/articles',
              name: 'ARTICLES',
              cnName: '团队博客'
          },
          {
              link: '/guide',
              name: 'GUIDE',
              cnName: '设计规范'
          },
          {
              link: '/resource',
              name: 'RESOURCE',
              cnName: '设计资源'
          },
          {
              link: '/lab',
              name: 'LAB',
              cnName: '云舍实验室'
          },
          {
              link: '/about',
              name: 'ABOUT',
              cnName: '关于我们'
          }
      ]
    }
 },
 methods: {
   close() {
       this.$store.state.isGobalNavOpen = false
   }
 }
}
</script>


<style lang="stylus">
.cxd-nav
  position fixed
  top 0
  left 0 
  z-index 300
  .nav-bg
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 300
    background-color rgba(255, 255, 255, .9)
  .nav-content
    width 200px
    position fixed
    z-index 301
    left 50%
    top 120px
    transform translateX(-50%)
    a
      transition .2s all ease-in-out
      margin-left 30px 
      display block
      position relative
      height 20px
      margin-top 20px
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
</style>
