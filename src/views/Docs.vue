<template>
    <div class="docs">
      <vue-scroll>
        <h2>{{ $route.params.id.toUpperCase()}}</h2>
        <div class="line"></div>
        <!--<div class="select">
            <div class="type select-item">
              <p>All</p>
            </div>
            <div class="time select-item">
              <p>Now</p>
            </div>
        </div>--> 
        <!-- 文章列表 --> 
        <transition name="fade-router-view-anti">
          <docBoxDocs :docList='resolveDocListDocs()' :key="$route.params.id"/>
        </transition>
        <!-- 页脚 --> 
        <Footer/>
      </vue-scroll>
    </div>
</template>



<script>
import docBoxDocs from '@/components/docBoxDocs.vue'
import Footer from '@/components/Footer.vue'
import {resolveDocList,resolveCover} from '@/util.js'
export default {
  name: 'docs',
  components: { 
    docBoxDocs,
    Footer
  },
  data() {
    return {
      docs:{},
      cover:{},
    }
  },
  created(){
    this.resolveData()
  },
  watch:{
  $route(to,from){
    this.resolveData()
  }
  },
  methods : { 
    resolveData() {
      const url = '/repos/cxd/' + this.$route.params.id + '/docs'
      this.$axios
        .get(url)
        .then(res=>{
          this.docs = res.data
        }) 
      this.$axios
        .get('/repos/cxd/config/docs/articles')
        .then(res=>{
          let coverData = res.data.data.body_html.match(/\<img[^\>]+\>/g)
          this.cover = resolveCover(coverData)
        }) 
    },
    resolveDocListDocs(){
      const kind = this.$route.params.id
      let coverData = this.cover
      let docData
      docData = this.docs.data
      if (docData){
        docData = resolveDocList(docData, kind, coverData)
        return docData.slice(0, 6) // 截取 6 个
      }
    }
  }
}
</script>


<style lang="stylus">
.docs
  .cxd-footer
    position relative
  background-color #F8F9FA
  width 100%
  height 100%
  overflow hidden
  padding-top 80px
  box-sizing border-box
  h2
    margin-top 50px
    text-align center
    font-weight 900
    font-size 36px
    line-height 49px
    color #3A3A3A
  .line
    width 60px
    height 2px
    background-color #3A3A3A
    margin 20px auto
  .select
    margin 30px auto 80px
    width 224px
    height 38px
    box-sizing border-box
    .select-item
      width 112px
      height 38px
      box-sizing border-box
      float left
      text-align center
      border 1px solid #333333
      &:hover
        cursor pointer
      p
        line-height 36px
        font-weight 700
        margin 0
        color #3A3A3A
    .time
      margin-left -1px
      border-radius 0 100px 100px 0
    .type
      border-radius 100px 0 0 100px 
</style>

