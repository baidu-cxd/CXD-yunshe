<template>
    <div class="doc">
      <vue-scroll>
        <div class="doc-imgcontent">
          <img :src="resolveHero(hero)" alt="">
          <div class="text-content">
            <h1>{{title}}</h1>
            <p>{{english}}</p>
          </div>
        </div>
        <div class="doc-content" v-html="doc"> {{ doc }}</div>
        <Footer/>
      </vue-scroll>
    </div>
</template>

<style lang="stylus">
@import "../stylus/doc.styl"
.doc
  .cxd-footer
    position relative
  height 100%
.doc-imgcontent
  margin-top 80px
  width 100%
  height 420px
  background-color #000
  overflow hidden
  position relative
  .text-content
    min-width 800px
    height 240px
    position absolute
    top 50%
    left 0
    background-color rgba(0,0,0,.8)
    transform translateY(-50%)
    h1
      color #fff
      margin 60px 0 0 180px 
      font-size 42px
      font-weight 900
    p
      color #ffffff
      margin 20px 0 0 180px 
      font-size 24px
      font-weight 700
  img 
    width 100%
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
.doc-content
  overflow hidden
  width 800px
  margin 80px auto
</style>

<script>
import Footer from '@/components/Footer.vue'
import {resolveDocHtml,resolveCover} from '@/util.js'
export default {
  components:{Footer},
  data(){
      return {
          doc : '',
          hero : '',
          cover : '',
          english : '',
          title: ''
      }
  },
  mounted(){
    this.resolveDoc()
  },
  methods : {
    resolveUrl() {
      const recentUrlArray = window.location.href.split('/')
      const recentSlug = recentUrlArray[recentUrlArray.length - 1]
      const recentRepo = recentUrlArray[recentUrlArray.length - 2]
      const recentUrl = '/repos/cxd/'+ recentRepo +'/docs/' + recentSlug 
      return recentUrl    
    },
    resolveHero(name) {
      return this.cover[name]
    },
    resolveDoc() {
      this.$axios
        .get('/repos/cxd/config/docs/articles')
        .then(res=>{
          let coverData = res.data.data.body_html.match(/\<img[^\>]+\>/g)
          this.cover = resolveCover(coverData)
        }) 
      const recentUrl = this.resolveUrl()
      this.$axios
        .get(recentUrl)
        .then(res=>{
          const doc = res.data
          const resolvedDoc = resolveDocHtml(doc)
          this.doc = resolvedDoc.html
          this.hero = resolvedDoc.hero
          this.title = resolvedDoc.title
          this.english = resolvedDoc.english
        }) 
    },      
  }
}
</script>
