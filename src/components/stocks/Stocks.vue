<template>
  <div>
<app-stock v-for="stock in stocks" :stock="stock" :key="stock.id">{{stock}}</app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  data() {
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 100},
        {id: 2, name: 'Google', price: 200},
        {id: 3, name: 'Apple', price: 250},
        {id: 4, name: 'Twitter', price: 50}
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style>
</style>
