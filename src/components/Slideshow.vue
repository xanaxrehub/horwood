<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Slideshow"
})
</script>

<template>
  <div class="container text-center" style="padding-top: 100px;">
    <div class="ukrajine-text">
      <h2 class="ukrajine-header" style="color: #5B7065">Dnes budeme hovoriť o</h2>
      <h1 class="ukrajine-title" style="color: #5B7065" >Ukrajine</h1>
    </div>
  </div>
  <div class="container" style="padding-bottom: 175px;">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style="border-radius: 20px;" src="@/assets/images/ukrajina1.jpg" class="d-block w-100 img-fluid" alt="...">
        </div>
        <div class="carousel-item">
          <img style="border-radius: 20px;" src="@/assets/images/ukrajina2.jpg" class="d-block w-100 img-fluid" alt="...">
        </div>
        <div class="carousel-item">
          <img style="border-radius: 20px;" src="@/assets/images/ukrajina3.jpg" class="d-block w-100 img-fluid" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>