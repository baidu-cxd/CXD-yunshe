<template>
    <div class="full-page">  
        <transition-group :name="transitionDirection">
            <slot name="group"></slot>
        </transition-group>   
        <slot name="bg"></slot>  
    </div>
</template>

<style lang="stylus">
.full-page, .full-page-child    
  width 100%
  height 100%
  overflow hidden 
  position absolute
  top 0
  left 0
  &#child-2
    background-color yellow
  &#child-3
    background-color black
</style>

<script>
export default {
    data() {
        return {
            transitionDirection : 'full-page-down',
            scrolling: false
        }
    },
    props: ['max'],
    created() {
        this.$store.state.fullPage = {
            max : this.max - 1,
            now : 0
        },
        window.addEventListener('mousewheel', (e)=>{
            var direction = e.deltaY>0? 'down':'up'; 
            this.handleScroll(direction) 
            }, true); 
    },
    destroyed() {
        this.$store.state.fullPage = {
            max : this.max - 1,
            now : 0
        },
        window.removeEventListener('mousewheel', (e)=>{
            var direction = e.deltaY>0? 'down':'up'; 
            this.handleScroll(direction) 
            }, true); 
    },
    methods: {
        changePage(direction) {
            if (direction === 'down') {
                if (this.$store.state.fullPage.now < this.$store.state.fullPage.max) {
                    this.$store.state.fullPage.now += 1
                    this.transitionDirection = 'full-page-down'
                } else {
                    // console.log ('没有了')
                }
            } else if (direction === 'up') {
                if (this.$store.state.fullPage.now > 0) {
                    this.$store.state.fullPage.now -= 1
                    this.transitionDirection = 'full-page-up'
                } else {
                    // console.log ('没有了')
                }
            }
        },
        handleScroll(direction) {
            if (direction === 'down' && !this.scrolling){
                this.changePage('down')
                this.scrolling = true
                setTimeout(()=>{this.scrolling = false},1000)
            } else if (direction === 'up' && !this.scrolling){
                this.changePage('up')
                this.scrolling = true
                setTimeout(()=>{this.scrolling = false},1000)
            } 
        }
    }
}
</script>


