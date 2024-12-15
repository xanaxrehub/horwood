<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="text-center" style="background-color: #5B7065; font-family: 'Montserrat', sans-serif;">
    <div class="container p-4">
      <section class="mb-4">
        <a id="hov" class="btn btn-floating m-1" style="background-color: #3b5998; border-radius: 40%;" href="https://sk-sk.facebook.com/" role="button">
          <img src="/src/assets/images/facebook.svg" width="24px" alt="Facebook" />
        </a>
        <a id="hov" class="btn btn-floating m-1" style="background-color: #55acee; border-radius: 40%;" href="https://twitter.com/" role="button">
          <img src="/src/assets/images/twitter.png" width="24px" alt="Twitter" />
        </a>
        <a id="hov" class="btn btn-floating m-1" style="background-color: #dd4b39; border-radius: 40%;" href="https://www.youtube.com/" role="button">
          <img src="/src/assets/images/youtube.png" width="24px" alt="YouTube" />
        </a>
        <a id="hov" class="btn btn-floating m-1" style="background-color: #ac2bac; border-radius: 40%;" href="https://www.instagram.com/" role="button">
          <img src="/src/assets/images/instagram.png" width="24px" alt="Instagram" />
        </a>
        <a id="hov" class="btn btn-floating m-1" style="background-color: #333333; border-radius: 40%;" href="https://github.com/" role="button">
          <img src="/src/assets/images/github.png" width="24px" alt="GitHub" />
        </a>
      </section>
      <section class="mb-4">
        <h3>HorWood</h3>
        <p>Stránky, ktoré vytvoria atmosféru cestovania, ponoria vás do kultúry úplne inej krajiny</p>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright: Ihor Shtefanets
    </div>
  </footer>
</template>

<style scoped>

</style>