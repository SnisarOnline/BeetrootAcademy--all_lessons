<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true"
                      @afterChange="onInitCarousel">
      <section>
       <div class="asdasdasdasdasdasdasd">
         <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt="img">
         <span>Lorem ipsum dolor sit amet.</span>
       </div>
      </section>
      <div>2</div>
      <section>3</section>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: {VueSlickCarousel},
  methods: {
    onInitCarousel: function (slideIndex) {
      console.log('slideIndex', slideIndex)
      setTimeout( () => {
        alert('asdasdasd');
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.asdasdasdasdasdasdasd{
  position: relative;
  width: 400px;
  span{
    position: absolute;
    background: red;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
