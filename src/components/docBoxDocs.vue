<template>
    <div class="doc-box-docs">
        <div class="card-content">
          <div v-for="doc in docList" :key="doc.id" class="doc-item">
            <router-link :to="doc.link">
              <div class="img-content">
                <img :src="doc.cover" alt="">
              </div>
              <h3>{{doc.title}}</h3>
              <p class="excerpt">{{doc.excerpt}}</p>
              <div class="tag">
                <p v-for="tag in doc.tag" :key="tag" class="tag">
                  {{tag}}
                </p>
              </div>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['docList','filter']
}
</script>

<style lang="stylus">
.doc-box-docs
  width 100%
  margin auto
  overflow hidden
  background-color #F8F9FA
  padding-bottom 120px
  .cxd-button-white
    margin 50px auto 0 
  .card-content
    margin auto 
    width 1200px
    overflow hidden
  .h2
    font-size 24px
    line-height 33px
    margin-bottom 60px
  .doc-item
    background-color #fff
    width 350px
    height 420px
    float left 
    overflow hidden
    margin 25px
    transition .4s all ease-in-out
    position relative
    &:hover
      box-shadow 0px 4px 20px rgba(0,0,0,.1)
      .under-line
        width 80px
      .img-content img  
        width 100%
        transform translate(-50%,-50%) scale(1.2)
    .img-content
      width 100%
      height 245px
      background-color #000
      overflow hidden
      position relative
      img 
        transition .6s all ease-in-out
        width 100%
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
    h3
      font-size 22px
      line-height 38px
      font-weight 700
      margin 20px 20px 0
      color #000
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    p.excerpt
      font-size 14px
      line-height 26px
      height 52px
      margin 10px 20px 15px
      color #3A3A3A
      display block
      overflow hidden
    p.link
      font-size 12px
      line-height 24px
      letter-spacing 3px
      color #000
      font-weight 900
      margin 15px 0 5px
    div.tag
      margin 0 20px 
      width 205px
      overflow hidden
      position absolute
      bottom 20px
      left 0
    p.tag
      color #3A3A3A
      font-size 12px
      line-height 26px
      margin 0
      display block
      float left 
      margin-right 8px
      width auto
</style>

