<script lang="ts">
import { defineComponent } from 'vue';
import Slideshow from "@/components/Slideshow.vue";
import data from "@/data/data.json"
import Card from "@/components/Card.vue";
import Main from "@/components/Main.vue";

export default defineComponent({
  name: 'HomeView',
  components: {Slideshow,
    Card,
    Main},
  data() {
    return {
      cards: data.cards,
    }
  },
});
</script>

<template>
  <Main/>
  <div class="container text-center">
    <div class="row gx-5 gy-5">
      <Card v-for="(card, index) in cards" :key="index" :image="card.image" :text="card.text"/>
    </div>
  </div>
  <Slideshow/>
</template>
