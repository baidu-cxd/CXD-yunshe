<template>
    <div class="doc">
      <vue-scroll>
        <div class="doc-content" v-html="doc"> {{ doc }}</div>
      </vue-scroll>
    </div>
</template>

<style lang="stylus">
.doc
  margin-top 80px
.doc-content
  width 800px
  margin auto
</style>

<script>
export default {
  data(){
      return {
          doc : ''
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
    resolveDoc() {
      const recentUrl = this.resolveUrl()
      this.$axios
        .get(recentUrl)
        .then(res=>{
          this.doc = res.data.data.body_html
        }) 
    },      
  }
}
</script>
