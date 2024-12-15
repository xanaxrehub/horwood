<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Zaujimavost",
  props: {
    image: String,
    cislo: String,
    text: String
  }
})
</script>

<template>
  <div class="container" style="padding-top: 50px; padding-bottom: 50px;" >
    <div class="row gx-5 gy-5 text-center zaujm">
      <div class="col-lg-6">
        <img class="img-fluid rounded" width="600px" :src="image" alt="">
      </div>
      <div class="col-lg-6 rounded p-3" style="background-color: #5B7065;">
        <div class="zaujm-text" style="color: #c9d1c8;">
          <img :src="cislo" alt="" style="padding-bottom: 5px;">
          <p>{{text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>