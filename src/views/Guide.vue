<template>
    <div class="guide">
      <Footer :kind="'black'"/>
    </div>
</template>

<style lang="stylus">
.guide
  height 100%
  background-color #000
  overflow hidden
  .child
    width 100%
    height 100%
</style>

<script>
import Footer from '@/components/Footer.vue'
export default {
    components: {Footer},
    data(){
        return {
            items : [
                {
                    name : 'PORTAL DESIGN',
                    des : ['HOME、PRODUCT','SOLUTION、MARKETING DESIGN'],
                    text : 'Portal 端平台规范是针对官网页面编写，意义在于保证统一、提高效率、利于设计自查、利于跨部门协作、共享资源。',
                    link: '/guide/portal'
                },
                {
                    name : 'CONSOLE DESIGN',
                    des : ['PRODUCT、SKETCH WIDGET LIB','PROJECT、INDEPENDANT PLATFORM'],
                    text : 'Console 端平台规范是为了对内统一设计语言，提供一套完整的设计依据和准则。对外设计异质化的同时方便上下游和跨团队协作快速表达需求和想法，既能提升开发效率，又能保证最终落地效果的一致性。',
                    link: '/guide/console'
                },
                {
                    name : 'MOTION DESIGN',
                    des : ['GUIDE、MOTION GRAPHIC','PAGE ANIMATION'],
                    text : '在页面中引入动画的主要为了帮助用户理解页面交互形式，提高页面视觉效果，加深用户对页面的印象，降低长时间浏览的枯燥感。',
                    link: '/guide/motion'
                }
            ]
        }
    },
}
</script>


