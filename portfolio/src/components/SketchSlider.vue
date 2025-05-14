<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const config = {
  height: 400,
  itemsToShow: 1,
  gap: 20,
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
}
</script>

<template>
  <div class="m-[1%] items-center justify-center">
    <Carousel v-bind="config">
      <Slide>
        <img src="../assets/slides/1.jpg" alt="image" class="carousal-image"/>
      </Slide>
      <Slide>
        <img src="../assets/slides/2.jpg" alt="image" class="carousal-image"/>
      </Slide>
      <Slide>
        <img src="../assets/slides/3.jpg" alt="image" class="carousal-image"/>
      </Slide>
      <Slide>
        <img src="../assets/slides/4.jpg" alt="image" class="carousal-image"/>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style>

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  padding : 10px;
}

.carousal-image {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

Slide {
  background-color:gray;
}
</style>
