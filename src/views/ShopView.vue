<script lang="ts">
import {defineComponent} from 'vue'
import Product from "@/components/Product.vue";
import data from "@/data/data.json"
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "ShopView",
  components: {Card, Product},
  data() {
    return {
      products: data.products
    }
  },
})
</script>

<template>
  <div class="container text-center my-5">
    <h1 class="display-4" style="color: #5B7065">Vitajte v našom obchode suvenírov</h1>
    <p class="lead" style="color: #5B7065">Objavte jedinečné suveníry, ktoré zachytávajú ducha vašich ciest. Od miestnych remesiel po špeciálne pamiatky, máme niečo pre každého!</p>
  </div>
  <div class="container">
    <div class="row justify-content-center">
      <Product v-for="(product, index) in products" :key="index" :product="product"/>
    </div>
  </div>
</template>

<style scoped>

</style>