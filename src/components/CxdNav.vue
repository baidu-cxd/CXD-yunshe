<template>
    <div class="cxd-nav">
      <div class="nav-content">
        <transition name="fade-scroll">
          <div class="animation-content"  @click="close()" v-if="this.$store.state.isGobalNavOpen">
            <div v-for="nav in navData" :key="nav.link">
              <router-link  :to='nav.link' v-if="nav.type !== 'out'">
                <p class="en">{{nav.name}}</p>
              </router-link>
              <a :href="nav.link" v-else><p class="en">{{nav.name}}</p></a>
            </div>
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
              cnName: '云舍首页',
          },
          {
              link: '/docs/projects',
              name: 'PROJECT',
              cnName: '项目总结'
          },
          {
              link: '/docs/articles',
              name: 'ARTICLES',
              cnName: '团队博客'
          },
          {
              link: '/guide',
              name: 'GUIDE',
              cnName: '设计规范'
          },
          {
              link: 'http://img.yunshe.design',
              name: 'RESOURCE',
              cnName: '设计资源',
              type: 'out'
          },
          {
              link: '/lab',
              name: 'LAB',
              cnName: '云舍实验室'
          },
          {
              link: '/cxd/about',
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
  z-index 100
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
</style>
