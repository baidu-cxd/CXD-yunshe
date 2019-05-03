<template>
    <div class="doc">
      <vue-scroll>
        <div class="doc-imgcontent">
          <img :src="resolveHero(hero)" alt="">
          <div class="text-content">
            <div class="text-content-inner">
              <h1>{{title}}</h1>
              <p>{{english}}</p>
            </div>
          </div>
        </div>
        <!-- 文章正文 -->
        <div class="doc-content" v-html="doc"> {{ doc }}</div>
        <!-- 用户名 --> 
        <div class="information">
          <div class="author">
            <img :src="author.medium_avatar_url" alt="">
            <p class="name">文章作者: {{author.name}}</p>
          </div>
        </div>
        <Footer/>
      </vue-scroll>
    </div>
</template>

<style lang="stylus">
@import "../stylus/doc.styl"
.doc
  .information
    width 800px
    margin auto
    overflow hidden
    margin-bottom 80px
    .author
      height 40px
      position relative
      img
        width 40px
        height 40px
        border-radius 100px
        position absolute
        top 0
        lefto 0
      p.name
        line-height 40px
        position absolute
        top 0px
        left 52px
        font-size 14px
        margin 0
  .cxd-footer
    position relative
  height 100%
.doc-imgcontent
  margin-top 80px
  width 100%
  height 420px
  background-color #ccc
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
    .text-content-inner
      overflow hidden
      position absolute
      top 50%
      transform translateY(-50%)
    h1
      color #fff
      margin 0 0 0 180px 
      font-size 42px
      font-weight 900
      width 600px
      line-height 60px
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
  margin 80px auto 40px
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
          title: '',
          author: ''
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
          console.log(doc)
          const resolvedDoc = resolveDocHtml(doc)
          this.doc = resolvedDoc.html
          this.hero = resolvedDoc.hero
          this.title = resolvedDoc.title
          this.english = resolvedDoc.english
          this.author = doc.data.creator
          console.log(this.author)
        }) 
    },      
  }
}
</script>
