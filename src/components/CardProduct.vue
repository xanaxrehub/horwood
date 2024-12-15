<script lang="ts">
import {defineComponent} from 'vue'
import { useCartStore } from '@/stores/CartStore'

export default defineComponent({
  name: "CardProduct",
  props: {
    product: Object
  },
  data() {
    return {
      cartStore: useCartStore(),
    }
  }
})
</script>

<template>
  <div class="card mb-3 me-3" style="max-width: 300px; width: 100%; margin-bottom: 20px;">
  <div class="row g-0">
    <div class="col-4 d-flex justify-content-center align-items-center">
      <img :src="product.image" class="img-fluid rounded-start" alt="Product image" style="max-height: 150px; object-fit: cover;" />
    </div>
    <div class="col-8">
      <div class="card-body" style="padding: 10px;">
        <h5 class="card-title" style="font-size: 1.1rem; font-weight: bold; color: #5B7065;">{{ product.name }}</h5>
        <p class="card-text" style="font-size: 0.9rem; color: #555; color: #5B7065;">{{ product.description }}</p>
        <p class="card-text" style="font-size: 1rem; font-weight: bold; color: #5B7065;">{{ product.price }} €</p>
        <button class="btn btn-danger" @click="cartStore.removeFromCart(product)" style="font-size: 0.85rem; padding: 5px 10px;">Odstrániť z košíka</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>