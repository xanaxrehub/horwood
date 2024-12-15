<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Fakt",
  props: {
    image: String,
    maintext: String,
    text: String
  }
})
</script>

<template>
  <div class="col-lg-2 stat mx-auto rounded" style="line-height: 1; padding-top: 25px;">
    <img :src="image" width="64px" alt="" class="rounded">
    <p class="stat-up" style="color: #C9D1C8; font-family: 'Montserrat', sans-serif; padding-top: 25px;">{{maintext}}</p>
    <p style="color: #C9D1C8; font-family: 'Montserrat', sans-serif; font-weight: bold;">{{ text }}</p>
  </div>
</template>

<style scoped>

</style>