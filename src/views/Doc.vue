<template>
    <div class="doc">
       <vue-scroll @handle-scroll="handleScroll" ref='vs'>
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
        <!-- 用户信息等 --> 
        <div class="information">
          <div class="author">
            <img :src="author.medium_avatar_url" alt="">
            <p class="name">文章作者: {{author.name}}</p>
          </div>
        </div>
        <!-- 翻页工具 --> 
        <upNext/>
        <!-- 文章推荐 --> 
        <docBoxDocs :docList='resolveDocListDocs()'/>
        <Footer/>
      </vue-scroll>
    </div>
</template>

<style lang="stylus">
@import "../stylus/doc.styl"
.doc
  background-color #F8F9FA
  .doc-box-docs
    padding-top 40px
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
    min-width 820px
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
import {resolveDocHtml,resolveDocList,resolveCover} from '@/util.js'
import docBoxDocs from '@/components/docBoxDocs.vue'
import upNext from '@/components/upNext.vue'
export default {
  components:{Footer,docBoxDocs,upNext},
  data(){
      return {
          doc : '',
          hero : '',
          cover : '',
          english : '',
          title: '',
          author: '',
          docs:{},
      }
  },
  mounted(){
    this.resolveDoc()
  },
  watch: {
    '$route' (to, from) {
        this.$refs['vs'].scrollTo(
            {
                y: 0
            },
          300,
          'easeInQuad'
        );
      this.resolveDoc()
    }
  },
  methods : {
    handleScroll(e){
        this.$store.state.scroll = e.scrollTop
    }, 
    resolveDocListDocs(){
      const kind = this.$route.matched[0].name
      let coverData = this.cover
      let docData
      docData = this.docs.data
      if (docData){
        docData = resolveDocList(docData, kind, coverData)
        return docData.slice(0, 3) // 截取 3 个
      }
    },
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
      const url = '/repos/cxd/' + this.$route.matched[0].name + '/docs'
      this.$axios
        .get(url)
        .then(res=>{
          this.docs = res.data
        }) 
      const recentUrl = this.resolveUrl()
      this.$axios
        .get(recentUrl)
        .then(res=>{
          const doc = res.data
          // console.log(doc)
          const resolvedDoc = resolveDocHtml(doc)
          this.doc = this.docFilter(resolvedDoc.html)
          this.hero = resolvedDoc.hero
          this.title = resolvedDoc.title
          this.english = resolvedDoc.english
          this.author = doc.data.creator
        }) 
    },  
    docFilter(doc){
        console.log(doc)
        let filteredDoc
        let reg =  new RegExp("width:.[0-9]+\.[0-9]+px\;",'g')
        filteredDoc  = doc.replace(reg,'')
        let regList =  new RegExp('<ul class="lake-list">.*?</ul>','') //.*？匹配最短
        filteredDoc  = doc.replace(regList,'')
        return filteredDoc
    }    
  }
}
</script>
