<template>
  <div class="home">
    <!-- 全屏滚动的区域 --> 
    <fullPage :max="2" ref="fullpage" key="home">
      <!-- 首屏 --> 
      <div class="full-page-child" 
        id="child-0" key="child-0" 
        v-if="this.$store.state.fullPage.now === 0" slot="group">
      </div>
      <!-- 底部部分 --> 
      <div class="full-page-child home-content" 
        id="child-1" key="child-1" 
        v-if="this.$store.state.fullPage.now === 1" slot="group">
        <vue-scroll @handle-scroll="handleScroll">
          <!-- 项目 --> 
          <h2>Projects</h2>
          <docBox :docList='resolveDocList("projects")'/>
          <!-- 文章 --> 
          <h2>Articles</h2>
          <docBox :docList='resolveDocList("articles")'/>
        </vue-scroll>
      </div>
    </fullPage>
  </div>
</template>


<style lang="stylus">
.home
  .full-page-child
    height 100%
  #child-1
    margin-top 80px
.home-content
  h2
    text-align center
</style>


<script>
import docBox from '@/components/docBox.vue'
import fullPage from '@/components/fullPage.vue'
import {resolveDocList} from '@/util.js'
export default {
  name: 'home',
  components: { 
    fullPage,
    docBox
  },
  data() {
    return {
      articles:{},
      projects:{}
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
    },
    resolveDocList(kind){
      let docData
      if(kind === 'articles'){
        docData = this.articles.data
      } else if (kind === 'projects') {
        docData = this.projects.data
      }
      docData = resolveDocList(docData, kind)
      return docData.slice(0, 5) // 截取 6 个
    }
  }
}
</script>
