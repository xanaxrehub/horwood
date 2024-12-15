<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Card",
  props: {
    image: String,
    text: String
  }
})
</script>

<template>
  <div class="col-lg-3 col-md-12 mx-auto rec align-items-center rounded">
    <div class="p-4">
      <img :src="image" width="80px" alt="">
      <p class="rec-text">{{text}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>