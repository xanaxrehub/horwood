import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import FaktyView from "@/views/FaktyView.vue";
import ZaujimavostiView from "@/views/ZaujimavostiView.vue";
import ShopView from "@/views/ShopView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/fakty',
      name: 'fakty',
      component: FaktyView,
    },
    {
      path:'/zaujimavosti',
      name:'zaujimavosti',
      component: ZaujimavostiView,
    },
    {
      path:'/shop',
      name:'shop',
      component: ShopView,
    },
    {
      path:'/cart',
      name:'cart',
      component: CartView
    }

  ],
})

export default router
