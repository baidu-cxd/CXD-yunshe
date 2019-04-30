<template>
    <div class="doc-box">
        <slot name="title"></slot>
        <div class="card-content">
          <div v-for="doc in docList" :key="doc.id" class="doc-item">
            <router-link :to="doc.link">
              <img :src="doc.cover" alt="">
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
    width 1250px
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
    img
      width 100%
      height 245px
    h3
      font-size 24px
      line-height 38px
      font-weight 700
      margin 25px 0 0 0
      color #000
    p.excerpt
      font-size 14px
      line-height 26px
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


