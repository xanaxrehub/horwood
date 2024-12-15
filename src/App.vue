<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"

export default defineComponent({
  components: {
    Navigation,
    Footer,
  }
})
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer />
</template>