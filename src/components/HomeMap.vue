<template>
    <div class="home-map">
        <div class="top"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="bottom"></div>
        <div class="content">
            <div class="img-content">
                <img src="@/assets/home/map.png" alt="">
            </div>
            <div class="text-content">
                <h2>ADDRESS</h2>
                <p>北京市海淀区百度科技园2号楼</p>
                <a target="_blank" href="https://map.baidu.com/search/%E7%99%BE%E5%BA%A6%E7%A7%91%E6%8A%80%E5%9B%AD-2%E5%8F%B7%E6%A5%BC/@12944262.115,4845478.13,19z?querytype=s&da_src=shareurl&wd=%E7%99%BE%E5%BA%A6%E7%A7%91%E6%8A%80%E5%9B%AD-2%E5%8F%B7%E6%A5%BC&c=131&src=0&wd2=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%B5%B7%E6%B7%80%E5%8C%BA&pn=0&sug=1&l=15&b=(12938519,4842650;12950039,4848394)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=fc9e9245d4de50c43a04b141&device_ratio=2">
                  <span>></span><p>BAIDU MAPS</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
.home-map
  height 800px
  width 100%
  overflow hidden
  position relative
  .content
    width 100%
    height 100%
    background-color rgba(0,0,0,.7)
    position relative
    z-index 1
    .img-content 
      width 560px
      height 400px
      position absolute
      left 150px
      bottom 120px
      img 
        width 100%
    .text-content 
      position absolute
      width 250px
      height 160px
      right 300px
      top 160px
      h2
        font-size 42px
        line-height 57px
        color #fff
        text-align right
        margin 0
        float right
      p,a,span
        font-size 18px
        line-height 32px
        margin-top 30px
        color #fff
        float right
      a
        margin-top 10px
        p,span
          margin 0
        span 
          margin-left 10px
        p
          text-decoration-line underline
  .top, .left, .right, .bottom
    background-color #fff 
    position absolute 
    z-index 2
  .top
    top -1px
    left 0
    width 100%
    height 72px
  .left
    left 0
    top 0
    width 72px
    height 100%
  .right
    right 0
    top 0
    width 72px
    height 100%
  .bottom
    bottom -1px
    left 0
    width 100%
    height 72px
</style>
