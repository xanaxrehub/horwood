<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cartStore';

export default defineComponent({
  name: "Navigation",
  data() {
    return {
      cartStore: useCartStore(),
    }
  }
});
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <img src="@/assets/images/logo.png" width="64px" height="64px" alt="">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active p-3 text-white">DOMOV</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/fakty" class="nav-link p-3 text-white">FAKTY</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zaujimavosti" class="nav-link p-3 text-white">ZAUJÍMAVOSTI</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link p-3 text-white">SHOP</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <router-link to="/cart" class="nav-link text-white position-relative">
            <i class="bi bi-cart-fill" style="font-size: 1.5rem; margin-right: 10px;"></i>
            <span class="badge bg-danger position-absolute" style="top: -5px; right: -5px; font-size: 0.8rem;">
              {{ cartStore.cartItemCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>