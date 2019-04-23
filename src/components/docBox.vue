<template>
    <div class="doc-box">
        <div v-for="doc in docList" :key="doc.id" class="doc-item">
          <router-link :to="doc.link">
            <img :src="doc.cover" alt="">
            <h3 class="excerpt">{{doc.title}}</h3>
            <p class="excerpt">{{doc.excerpt}}</p>
            <p>READ MORE</p>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['docList']
}
</script>

<style lang="stylus">
.doc-box
  width 1250px
  margin auto
  overflow hidden
  .doc-item
    width 350px
    height 400px
    background-color #f5f5f5
    float left 
    overflow hidden
    margin 25px
    img
      width 100%
</style>


