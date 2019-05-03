<template>
    <div class="doc-box">
        <slot name="title"></slot>
        <div class="card-content">
          <div v-for="doc in docList" :key="doc.id" class="doc-item">
            <router-link :to="doc.link">
              <div class="img-content">
                <img :src="doc.cover" alt="">
              </div>
              <h3>{{doc.title}}</h3>
              <p class="excerpt">{{doc.excerpt}}</p>
              <p class="link">READ MORE</p>
              <div class="under-line"></div>
            </router-link>
          </div>
        </div>
        <slot name="action"></slot>
    </div>
</template>

<script>
export default {
    props: ['docList']
}
</script>

<style lang="stylus">
.doc-box
  width 100%
  margin auto
  overflow hidden
  background-color #fff
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
    width 350px
    height 400px
    float left 
    overflow hidden
    margin 25px
    &:hover
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
      font-size 24px
      line-height 38px
      font-weight 700
      margin 25px 0 0 0
      color #000
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    p.excerpt
      font-size 14px
      line-height 26px
      height 26px
      display block
      overflow hidden
      width 80%
      white-space nowrap
      text-overflow ellipsis
      margin 10px 0 15px
      color #3A3A3A
    p.link
      font-size 12px
      line-height 24px
      letter-spacing 3px
      color #000
      font-weight 900
      margin 15px 0 5px
    .under-line
      background-color #000
      width 35px
      height 3px
      transition .2s all ease-in-out
</style>


