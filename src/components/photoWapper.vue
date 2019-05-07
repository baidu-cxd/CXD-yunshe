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
                '11' : require('@/assets/about/photo/1.1@2x.png'),
                '12' : require('@/assets/about/photo/1.2@2x.png'),
                '13' : require('@/assets/about/photo/1.3@2x.png'),
                '14' : require('@/assets/about/photo/1.4@2x.png'),
                '15' : require('@/assets/about/photo/1.5@2x.png'),
                '16' : require('@/assets/about/photo/1.6@2x.png'),
            },
            {
                '21' : require('@/assets/about/photo/2.1@2x.png'),
                '22' : require('@/assets/about/photo/2.2@2x.png'),
                '23' : require('@/assets/about/photo/2.3@2x.png'),
                '24' : require('@/assets/about/photo/2.4@2x.png'),
                '25' : require('@/assets/about/photo/2.5@2x.png'),
                '26' : require('@/assets/about/photo/2.6@2x.png'),
                '27' : require('@/assets/about/photo/2.7@2x.png'),
            },
            {
                '31' : require('@/assets/about/photo/3.1@2x.png'),
                '32' : require('@/assets/about/photo/3.2@2x.png'),
                '33' : require('@/assets/about/photo/3.3@2x.png'),
                '34' : require('@/assets/about/photo/3.4@2x.png'),
                '35' : require('@/assets/about/photo/3.5@2x.png'),
                '36' : require('@/assets/about/photo/3.6@2x.png'),
                '37' : require('@/assets/about/photo/3.7@2x.png'),
            },
            {
                '41' : require('@/assets/about/photo/4.1@2x.png'),
                '42' : require('@/assets/about/photo/4.2@2x.png'),
                '43' : require('@/assets/about/photo/4.3@2x.png'),
                '44' : require('@/assets/about/photo/4.4@2x.png'),
                '45' : require('@/assets/about/photo/4.5@2x.png'),
                '46' : require('@/assets/about/photo/4.6@2x.png'),
                '47' : require('@/assets/about/photo/4.7@2x.png'),
            },
            {
                '51' : require('@/assets/about/photo/5.1@2x.png'),
                '52' : require('@/assets/about/photo/5.2@2x.png'),
                '53' : require('@/assets/about/photo/5.3@2x.png'),
                '54' : require('@/assets/about/photo/5.4@2x.png'),
                '55' : require('@/assets/about/photo/5.5@2x.png'),
                '56' : require('@/assets/about/photo/5.6@2x.png'),
                '57' : require('@/assets/about/photo/5.7@2x.png'),
            },
            {
                '61' : require('@/assets/about/photo/6.1@2x.png'),
                '62' : require('@/assets/about/photo/6.2@2x.png'),
                '63' : require('@/assets/about/photo/6.3@2x.png'),
                '64' : require('@/assets/about/photo/6.4@2x.png'),
                '65' : require('@/assets/about/photo/6.5@2x.png'),
                '66' : require('@/assets/about/photo/6.6@2x.png'),
                '67' : require('@/assets/about/photo/6.7@2x.png'),
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
      background-color #000
      &.line-0
        flex 0.992
      &.line-1
        flex 0.994
      &.line-2
        flex 1
      &.line-3
        flex 0.99808
      &.line-4
        flex 1.12
      &.line-5
        flex .8726
      .photo-content
        width 100%
        overflow hidden
        position relative
        background-color #000
        overflow hidden
        &:hover
          p.name
            // transform translateY(0)
            // opacity 1
          img 
            filter grayscale(0)
            cursor pointer
        p.name
          position absolute
          margin 0
          width 100%
          box-sizing border-box
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
