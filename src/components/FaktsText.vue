<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FaktsText",
  props: {
    image: String,
    section: String,
    text: String
  }
})
</script>

<template>
  <div class="row gx-5 gy-5 text-center" style="padding-bottom: 50px;">
    <div class="col fakts1 mx-auto p-4 rounded">
      <img :src="image" width="120px" alt="">
      <h3 style="padding-top: 5px; color: #c9d1c8; font-family: 'Montserrat', sans-serif; font-weight: 700;">{{section}}</h3>
      <p style="padding-top: 10px; color: #c9d1c8; font-family: 'Montserrat', sans-serif;">{{text}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>