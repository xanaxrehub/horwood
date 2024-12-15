<script lang="ts">
import {defineComponent} from 'vue'
import { useCartStore } from '@/stores/CartStore'
import CardProduct from "@/components/CardProduct.vue";


export default defineComponent({
  name: "CartView",
  components: {CardProduct},
  data() {
    return {
      cartStore: useCartStore(),
    }
  }
})
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center" style="font-size: 2rem; color: #5B7065;">Produkty v košíku</h1>
    <div class="d-flex flex-wrap justify-content-start">
        <CardProduct v-for="(product, index) in cartStore.getCartProducts" :key="index" :product="product" />
    </div>
    <div class="d-flex justify-content-between mt-4" style="font-size: 1.1rem;">
      <h3 style="color: #5B7065;">Počet produktov: {{ cartStore.cartItemCount }}</h3>
      <h3 style="color: #5B7065;">Celková cena: {{ cartStore.getTotalPrice }} €</h3>
    </div>
  </div>
</template>