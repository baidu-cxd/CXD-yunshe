<template>
  <div class="home">
    <!-- 全屏滚动的区域 --> 
    <fullPage :max="2" ref="fullpage" key="home">
      <!-- 首屏 --> 
      <div class="full-page-child" 
        id="child-0" key="child-0" 
        v-if="this.$store.state.fullPage.now === 0" slot="group">
        <HomeMainFullPage/>
      </div>
      <!-- 底部部分 --> 
      <div class="full-page-child home-content" 
        id="child-1" key="child-1" 
        v-if="this.$store.state.fullPage.now === 1" slot="group">
        <vue-scroll @handle-scroll="handleScroll">
          <!-- 项目 --> 
          <h2>Projects</h2>
          <docBox :docList='startResolveDocList("projects")'/>
          <!-- 文章 --> 
          <h2>Articles</h2>
          <docBox :docList='startResolveDocList("articles")'/>
        </vue-scroll>
      </div>
    </fullPage>
    <div class="banner-bg">
      <div class="mask"></div>
      <video src="https://cxd-public.cdn.bcebos.com/cxd-guide/bg.mp4" autoplay="autoplay" muted loop/>
    </div>
  </div>
</template>


<style lang="stylus">
.home
  .full-page-child
    height 100%
    overflow hidden
  #child-0
    background-color transparent
  #child-1
    margin-top 80px
.home-content
  h2
    text-align center
.banner-bg
  width 100%
  position relative
  z-index -1
  .mask
    width 100%
    height 100%
    background-color #fff
    opacity 1
    animation video-in .2s ease-in-out .8s forwards
    position absolute
    top 0
    z-index -1
  video
    position relative
    width 100%
    z-index -2
@keyframes video-in
  0%
    opacity 1
  100%
    opacity 0
</style>


<script>
import docBox from '@/components/docBox.vue'
import fullPage from '@/components/fullPage.vue'
import HomeMainFullPage from '@/components/HomeMainFullPage.vue'
import {resolveDocList,resolveCover} from '@/util.js'
export default {
  name: 'home',
  components: { 
    fullPage,
    docBox,
    HomeMainFullPage
  },
  data() {
    return {
      articles:{},
      projects:{},
      cover:{},
    }
  },
  mounted(){
    this.resolveData()
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){
    window.removeEventListener('scroll',this.handleScroll)
  },
  methods : {
    handleScroll(e){
        this.$store.state.scroll = e.scrollTop
    },    
    resolveData() {
      let data
      this.$axios
        .get('/repos/277236/docs')
        .then(res=>{
          this.articles = res.data
        }) 
      this.$axios
        .get('/repos/277389/docs')
        .then(res=>{
          this.projects = res.data
        }) 
      this.$axios
        .get('/repos/cxd/config/docs/articles')
        .then(res=>{
          this.cover = res.data.data.body_html.match(/\<img[^\>]+\>/g)
        }) 
    },
    startResolveDocList(kind){
      let coverData = resolveCover(this.cover)
      let docData
      if(kind === 'articles'){
        docData = this.articles.data
      } else if (kind === 'projects') {
        docData = this.projects.data
      }
      docData = resolveDocList(docData, kind, coverData)
      return docData.slice(0, 5) // 截取 6 个
    }
  }
}
</script>
