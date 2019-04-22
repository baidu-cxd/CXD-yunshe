<template>
  <div class="home">
    这是首页
    <!-- 全屏滚动的区域 --> 
    <fullPage :max="2" ref="fullpage" key="home">
      <!-- 首屏 --> 
      <div class="full-page-child" 
        id="child-0" key="child-0" 
        v-if="this.$store.state.fullPage.now === 0" slot="group">
      </div>
      <!-- 第二屏 --> 
      <div class="full-page-child" 
        id="child-1" key="child-1" 
        v-if="this.$store.state.fullPage.now === 1" slot="group">
        <vue-scroll @handle-scroll="handleScroll">
          {{article.data}}
        </vue-scroll>
      </div>
    </fullPage>
  </div>
</template>


<style lang="stylus">
.home
  .full-page-child
    min-height 100%
    // 第一屏样式
    &#child-0
      background-color red
    // 第二屏样式
    &#child-1
      padding 80px
</style>


<script>
import fullPage from '@/components/fullPage.vue'
import {getArticle} from '@/api/api.js'
export default {
  name: 'home',
  components: { 
    fullPage
  },
  data() {
    return {
      article:{}
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
      getArticle.then(res=>{
        console.log(res.data)
        this.article = res.data
        }) 
    }
  }
}
</script>
