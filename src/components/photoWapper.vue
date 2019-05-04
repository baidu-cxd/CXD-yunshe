<template>
    <div class="photo-wapper">
        <div class="photos">
            <div :class="['line', 'line-'+i]" 
              v-for="(line,i) in photo" 
              :key="i">
                <div class="photo-content" v-for="(data,name) in line" :key="name">
                  <div v-if="typeof(data)=='string'">
                    <img :src="data" alt="">
                    <p class="name">{{name}}</p>
                  </div>
                  <div v-if="typeof(data)=='object'">
                    <img :src="data.link" alt="">
                    <p class="name">{{ data.name || name }}</p>                      
                  </div>
                </div>
            </div>
        </div>
        <div class="text">Welcome to our family</div>
    </div>
</template>


<script>
export default {
    data(){
        return {'photo' : 
        [
            {
                '团建活动照片' : require('@/assets/about/photo/1.png'),
                '这就是一只猫' : require('@/assets/about/photo/2.jpg'),
                '这也就是一只猫' : require('@/assets/about/photo/3.jpg'),
            },
            {
                '照片测试' : require('@/assets/about/photo/4.jpeg'),
                '风景图测试' : {link : require('@/assets/about/photo/5.jpeg'), name : '风景图'},
            },
            {
                '一堆南瓜' : require('@/assets/about/photo/6.jpeg'),
                '一个窗子' : require('@/assets/about/photo/7.jpeg'),
            },
            {
                '银河真好看' : require('@/assets/about/photo/8.jpeg'),
                '瞅你咋滴' : require('@/assets/about/photo/9.jpeg'),
            },
            {
                '给你一拳' : require('@/assets/about/photo/10.jpeg'),
                '这是个超市吧' : require('@/assets/about/photo/13.jpeg'),
            },
            {
                '有一点好玩' : require('@/assets/about/photo/12.jpeg'),
                '火车没出轨' : require('@/assets/about/photo/11.jpeg'),
            }
        ]
        }
    },
    methods:{

    }
}
</script>


<style lang="stylus">
// 浏览器
.photo-wapper
  .photo-view
    position fixed
    width 100%
    height 100%
    z-index 10000
    top 0
    left 0
.photo-wapper
  width 100%
  background-color #000
  .photos
    width 100%
    display flex
    flex-direction row
    justify-content space-around
    .line
      min-height 40px
      overflow hidden
      flex 1
      background-color #000
      .photo-content
        width 100%
        overflow hidden
        position relative
        background-color #000
        overflow hidden
        &:hover
          p.name
            transform translateY(0)
            opacity 1
          img 
            filter grayscale(0)
            cursor pointer
        p.name
          position absolute
          margin 0
          width 100%
          line-height 30px
          background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5))
          padding 8px 12px
          opacity 0
          color #fff
          font-size 14px
          text-align center
          bottom 0
          left 0
          transform translateY(100%)
          transition .4s all ease-in-out
        img 
          width 100%
          filter grayscale(100%)
          transition .2s all ease-in-out
          display block
          margin 0
  .text
    width 100%
    height 120px
    font-weight 14px
    line-height 120px
    color #fff
    text-align center
    font-weight 900
</style>
