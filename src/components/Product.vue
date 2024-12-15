<script lang="ts">
import {defineComponent} from 'vue'
import { useCartStore } from '@/stores/CartStore'

export default defineComponent({
  name: "Product",
  props: {
    product: Object
  },
  data() {
    return {
      cartStore: useCartStore(),
    }
  },
})
</script>

<template>
  <div class="col-md-3 mb-4">
    <div class="card">
      <img :src="product.image" style="height: 300px; object-fit: cover;" class="card-img-top" alt="Suvenír 1">
      <div class="card-body text-center">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.description}}</p>
        <p class="card-text text-success"><strong>{{product.price}}$</strong></p>
        <button @click="cartStore.addToCart(product)" class="btn" style="background-color: #5B7065; color: white;">Pridať do košíka</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>