import { defineStore } from 'pinia'
import data from '@/data/data.json'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    products: data.products,
    cartProducts: JSON.parse(localStorage.getItem('cartProducts') || '[]'),
  }),
  getters: {
    getCartProducts: (state) => state.cartProducts,

    cartItemCount: (state) => {
      return state.cartProducts.length;
    },

    getTotalPrice: (state) => {
      return state.cartProducts.reduce((res, product) => res + product.price, 0);
    },
  },
  actions: {
    addToCart(product) {
      this.cartProducts.push(product);
      this.syncStorage();
    },
    removeFromCart(product) {
      const index = this.cartProducts.indexOf(product);
      this.cartProducts.splice(index, 1);
      this.syncStorage();
    },
    syncStorage() {
      localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    },
  },
});

